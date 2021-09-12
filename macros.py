def readtime_minutes(content, wpm=200):
    import readtime

    result = readtime.of_markdown(content, wpm=wpm)
    return result.minutes


def localized_date(value, format="medium"):
    from babel.dates import format_date

    return format_date(value, format=format, locale="en")


def define_env(env):
    env.filters["readtime"] = readtime_minutes
    env.filters["localized_date"] = localized_date
