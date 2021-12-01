from pathlib import Path
from mkdocs.config import Config


def test_valid_chiffre_analytics_in_page(mkdocs_config: Config) -> None:
    analytics_config = mkdocs_config["extra"]["analytics"]

    page_path = Path(mkdocs_config["site_dir"]) / "index.html"
    page_content = page_path.read_text()

    assert analytics_config["public_key"] in page_content
    assert analytics_config["project_id"] in page_content
