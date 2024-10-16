from pathlib import Path
from mkdocs.config.defaults import MkDocsConfig


def test_well_known_files_included(mkdocs_config: MkDocsConfig) -> None:
    well_known_dir = Path(__file__).parent.parent / "content" / ".well-known"
    for well_known_file in filter(lambda x: x.is_file(), well_known_dir.glob("**/*")):
        relative_path = well_known_file.relative_to(well_known_dir)
        build_path = Path(mkdocs_config["site_dir"]) / ".well-known" / relative_path
        assert build_path.read_text() == well_known_file.read_text()
