import math
import jinja2
import mkdocs.exceptions
import pytest

from datetime import date, datetime
from unittest.mock import MagicMock
from typing import Any, Dict, Union
from faker import Faker
from mkdocs.structure.pages import Page

from utils import hooks


# ------------------------------------------------------------------------------


@pytest.fixture(scope="function")
def markdown_lorem(faker: Faker) -> str:
    return f"""# {faker.sentence()}

{faker.paragraph()}

## {faker.sentence()}

{faker.paragraphs()}

## {faker.sentence()}

{faker.paragraphs()}

![Image]({faker.image_url()})

{faker.paragraphs()}

## {faker.sentence()}

{faker.paragraphs()}
"""


@pytest.fixture(scope="function")
def markdown_form(faker: Faker) -> str:
    return f"""# {faker.sentence()}

{faker.paragraph()}

{{{{ form }}}}

{faker.paragraph()}
"""


@pytest.fixture(scope="function")
def page_meta_form() -> Dict[str, Any]:
    return dict(
        form=dict(
            name="test_form",
            fields=dict(
                name=dict(
                    label="Name",
                    placeholder="Your name",
                    type="text",
                    autocomplete=True,
                    required=True,
                )
            ),
            buttons=dict(submit=dict(type="submit", value="Send")),
            redirect=dict(success="/success", error="/error"),
        )
    )


@pytest.fixture(scope="function")
def config_forms() -> Dict[str, Any]:
    return dict(
        test_form=dict(
            base_url="https://forms.com",
            method="POST",
            action_path="/api/mail/form",
            action_path_js="/api/mail",
            enable_js=True,
        )
    )


# ------------------------------------------------------------------------------


def test_readtime_minutes_sentence(faker: Faker) -> None:
    nwords = 400
    wpm = 200
    sentence = faker.sentence(nb_words=nwords, variable_nb_words=False)

    readtime = hooks.readtime_minutes(sentence, wpm=wpm)

    assert readtime == pytest.approx(nwords / wpm, rel=1)


def test_readtime_minutes_markdown(markdown_lorem: str) -> None:
    wpm = 200

    readtime = hooks.readtime_minutes(markdown_lorem, wpm=wpm)

    assert readtime == pytest.approx(
        math.ceil(len(markdown_lorem.split()) / wpm), rel=1
    )


# ------------------------------------------------------------------------------


@pytest.mark.parametrize(
    ("date_str", "format", "locale", "expected"),
    (
        (date(2021, 1, 2), "short", "en", "1/2/21"),
        (date(2021, 1, 2), "medium", "en", "Jan 2, 2021"),
        (date(2021, 1, 2), "long", "en", "January 2, 2021"),
        (date(2021, 1, 2), "full", "en", "Saturday, January 2, 2021"),
        (date(2021, 1, 2), "short", "fr", "02/01/2021"),
        (date(2021, 1, 2), "medium", "fr", "2 janv. 2021"),
        (date(2021, 1, 2), "long", "fr", "2 janvier 2021"),
        (date(2021, 1, 2), "full", "fr", "samedi 2 janvier 2021"),
    ),
)
def test_localized_date_success(
    date_str: date, format: str, locale: str, expected: str
) -> None:
    result = hooks.localized_date(date_str, format, locale)
    assert result == expected


# ------------------------------------------------------------------------------


def test_render_form_success(
    markdown_form: str, page_meta_form: Dict[str, Any], config_forms: Dict[str, Any]
) -> None:
    action_path_url = str(config_forms["test_form"]["base_url"]) + str(
        config_forms["test_form"]["action_path"]
    )

    rendered = hooks.render_form(markdown_form, page_meta_form, config_forms)

    assert "<form" in rendered
    assert "<script>" in rendered
    assert f'method="{config_forms["test_form"]["method"]}"' in rendered
    assert f'action="{action_path_url}"' in rendered


def test_render_form_undefined_name(
    markdown_form: str, page_meta_form: Dict[str, Any], config_forms: Dict[str, Any]
) -> None:
    page_meta_form["form"]["name"] = "undefined_form"
    with pytest.raises(mkdocs.exceptions.PluginError):
        hooks.render_form(markdown_form, page_meta_form, config_forms)


def test_render_form_no_placeholder(
    markdown_form: str, page_meta_form: Dict[str, Any], config_forms: Dict[str, Any]
) -> None:
    markdown_form = markdown_form.replace("{{ form }}", "")
    rendered = hooks.render_form(markdown_form, page_meta_form, config_forms)
    assert rendered == markdown_form


def test_render_form_no_form(
    markdown_form: str, page_meta_form: Dict[str, Any], config_forms: Dict[str, Any]
) -> None:
    del page_meta_form["form"]
    rendered = hooks.render_form(markdown_form, page_meta_form, config_forms)
    assert rendered == markdown_form


# ------------------------------------------------------------------------------


@pytest.mark.parametrize(
    ("dt", "expected"),
    (
        (date(2021, 1, 2), "Sat, 02 Jan 2021 00:00:00 +0000"),
        (datetime(2021, 1, 2), "Sat, 02 Jan 2021 00:00:00 +0000"),
    ),
)
def test_to_rfc822(dt: Union[date, datetime], expected: str) -> None:
    result = hooks.to_rfc822(dt)
    assert result == expected


# ------------------------------------------------------------------------------


def test_on_env_success() -> None:
    jinja_env = jinja2.Environment()
    hooks.on_env(jinja_env)
    assert "readtime" in jinja_env.filters
    assert "localized_date" in jinja_env.filters
    assert "to_rfc822" in jinja_env.filters


# ------------------------------------------------------------------------------


def test_on_page_markdown_success(
    markdown_form: str, page_meta_form: Dict[str, Any], config_forms: Dict[str, Any]
) -> None:
    config = dict(extra=dict(forms=config_forms))
    page = Page("Test Page", MagicMock(), config)
    page.meta = page_meta_form

    rendered = hooks.on_page_markdown(markdown_form, page, config)

    assert "<form" in rendered
    assert "<script>" in rendered
