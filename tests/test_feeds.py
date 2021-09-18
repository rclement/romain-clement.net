import json
import feedparser
import jsonschema
import pytest

from pathlib import Path
from mkdocs.config import Config


@pytest.mark.parametrize(
    "feed_file",
    (
        Path("feed") / "articles" / "rss.xml",
        Path("feed") / "articles" / "atom.xml",
    ),
)
def test_valid_rss_atom_feed(mkdocs_build: Config, feed_file: Path) -> None:
    feed_path = Path(mkdocs_build["site_dir"]) / feed_file
    feed = feedparser.parse(feed_path)

    channel_elements = ["title", "description", "link", "updated", "generator"]
    for e in channel_elements:
        assert e in feed.feed

    entry_elements = ["id", "title", "author", "description", "link", "published"]
    for entry in feed.entries:
        for el in entry_elements:
            assert el in entry


def test_valid_json_feed(mkdocs_build: Config) -> None:
    json_feed_schema_path = Path(__file__).parent / "json-feed-schema-v1.1.json"
    json_feed_schema = json.loads(json_feed_schema_path.read_text())
    json_feed_path = Path(mkdocs_build["site_dir"]) / "feed" / "articles" / "feed.json"
    json_feed = json.loads(json_feed_path.read_text())

    jsonschema.validate(instance=json_feed, schema=json_feed_schema)
