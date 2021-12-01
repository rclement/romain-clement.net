import os
import pytest

from pathlib import Path
from shutil import rmtree
from typing import Generator
from mkdocs import config
from mkdocs.commands import build


os.environ["SITE_URL"] = "http://localhost"
os.environ["MAILER_URL"] = "http://mailer.local"
os.environ["CHIFFRE_PUBLIC_KEY"] = "chiffre-public-key"
os.environ["CHIFFRE_PROJECT_ID"] = "chiffre-project-id"


@pytest.fixture(scope="session", autouse=True)
def mkdocs_config() -> config.Config:
    cfg = config.load_config()
    cfg["site_dir"] = str((Path(__file__).parent / "site").absolute())
    return cfg


@pytest.fixture(scope="session", autouse=True)
def mkdocs_build(mkdocs_config: config.Config) -> Generator[None, None, None]:
    build.build(mkdocs_config)
    yield
    rmtree(mkdocs_config["site_dir"])
