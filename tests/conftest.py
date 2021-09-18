import pytest

from pathlib import Path
from shutil import rmtree
from typing import Generator
from mkdocs import config
from mkdocs.commands import build


@pytest.fixture(scope="session", autouse=True)
def mkdocs_config() -> config.Config:
    cfg = config.load_config()
    cfg["site_dir"] = str((Path(__file__).parent / "site").absolute())
    cfg["site_url"] = "http://localhost"
    cfg["extra"]["forms"]["contact"]["base_url"] = "http://mailer.local"
    return cfg


@pytest.fixture(scope="session", autouse=True)
def mkdocs_build(mkdocs_config: config.Config) -> Generator[None, None, None]:
    build.build(mkdocs_config)
    yield
    rmtree(mkdocs_config["site_dir"])
