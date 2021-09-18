import pytest

from pathlib import Path
from shutil import rmtree
from typing import Generator
from mkdocs import config
from mkdocs.commands import build


@pytest.fixture(scope="session", autouse=True)
def mkdocs_build() -> Generator[config.Config, None, None]:
    mkdocs_config = config.load_config()
    mkdocs_config["site_dir"] = str((Path(__file__).parent / "site").absolute())
    build.build(mkdocs_config)

    yield mkdocs_config

    rmtree(mkdocs_config["site_dir"])
