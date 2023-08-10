import email.utils
import re
import jinja2
import mkdocs.exceptions
import readtime

from datetime import date, datetime, timezone
from pathlib import Path
from typing import Any, Dict, MutableMapping, Union
from babel.dates import format_date
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.pages import Page


def readtime_minutes(content: str, wpm: int = 200) -> int:
    result = readtime.of_markdown(content, wpm=wpm)
    minutes: int = result.minutes
    return minutes


def localized_date(date_str: date, format: str = "medium", locale: str = "en") -> str:
    locale_date_str: str = format_date(date_str, format=format, locale=locale)
    return locale_date_str


form_regex = re.compile(r"\{\{ form \}\}")


def render_form(
    source: str, metadata: MutableMapping[str, Any], forms_config: Dict[str, Any]
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


def to_iso8601(dt: Union[date, datetime]) -> str:
    dt = datetime.combine(dt, datetime.min.time(), tzinfo=timezone.utc)
    return dt.isoformat()


def to_rfc822(dt: Union[date, datetime]) -> str:
    dt = datetime.combine(dt, datetime.min.time(), tzinfo=timezone.utc)
    return email.utils.format_datetime(dt, usegmt=False)


def on_env(env: jinja2.Environment, **kwargs: Any) -> None:
    env.filters["localized_date"] = localized_date
    env.filters["readtime"] = readtime_minutes
    env.filters["to_iso8601"] = to_iso8601
    env.filters["to_rfc822"] = to_rfc822


def on_page_markdown(
    markdown: str, page: Page, config: MkDocsConfig, **kwargs: Any
) -> str:
    markdown = render_form(markdown, page.meta, config["extra"].get("forms"))
    return markdown
