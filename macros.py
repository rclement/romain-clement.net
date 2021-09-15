import readtime

from babel.dates import format_date
from mkdocs_macros.plugin import MacrosPlugin


def readtime_minutes(content: str, wpm: int = 200) -> int:
    result = readtime.of_markdown(content, wpm=wpm)
    minutes: int = result.minutes
    return minutes


def localized_date(date_str: str, format: str = "medium", locale: str = "en") -> str:
    locale_date_str: str = format_date(date_str, format=format, locale=locale)
    return locale_date_str


def define_env(env: MacrosPlugin) -> None:
    env.filters["readtime"] = readtime_minutes
    env.filters["localized_date"] = localized_date
