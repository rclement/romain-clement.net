import re
import jinja2
import mkdocs.exceptions
import readtime

from pathlib import Path
from typing import Any, Dict
from babel.dates import format_date
from mkdocs.structure.pages import Page


def readtime_minutes(content: str, wpm: int = 200) -> int:
    result = readtime.of_markdown(content, wpm=wpm)
    minutes: int = result.minutes
    return minutes


def localized_date(date_str: str, format: str = "medium", locale: str = "en") -> str:
    locale_date_str: str = format_date(date_str, format=format, locale=locale)
    return locale_date_str


form_regex = re.compile(r"\{\{ form \}\}")


def render_form(
    source: str, metadata: Dict[str, Any], forms_config: Dict[str, Any]
) -> str:
    page_form = metadata.get("form")
    if page_form is not None:
        form_name = page_form.get("name")
        if form_name is not None and form_name not in forms_config.keys():
            raise mkdocs.exceptions.PluginError(
                f"Undefined form {form_name}. Please define the form in MkDocs config."
            )
        form_config = forms_config[form_name]

        templates_path = Path(__file__).parent / "templates"
        template_loader = jinja2.FileSystemLoader(searchpath=templates_path)
        template_env = jinja2.Environment(loader=template_loader)
        form_template = template_env.get_template("form.html")
        rendered_form = form_template.render(
            page_form=page_form,
            form_config=form_config,
        )

        return form_regex.sub(rendered_form, source)

    return source


def on_env(env: jinja2.Environment, **kwargs: Any) -> None:
    env.filters["readtime"] = readtime_minutes
    env.filters["localized_date"] = localized_date


def on_page_markdown(
    markdown: str, page: Page, config: Dict[str, Any], **kwargs: Any
) -> str:
    markdown = render_form(markdown, page.meta, config["extra"].get("forms"))
    return markdown
