import os
import pytest

from pathlib import Path
from shutil import rmtree
from typing import Generator
from mkdocs.config.base import load_config
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.commands import build


os.environ["SITE_URL"] = "http://localhost"
os.environ["MAILER_URL"] = "http://mailer.local"
os.environ["CHIFFRE_PUBLIC_KEY"] = "chiffre-public-key"
os.environ["CHIFFRE_PROJECT_ID"] = "chiffre-project-id"


@pytest.fixture(scope="session", autouse=True)
def mkdocs_config() -> MkDocsConfig:
    cfg = load_config()
    cfg["site_dir"] = str((Path(__file__).parent / "site").absolute())
    return cfg


@pytest.fixture(scope="session", autouse=True)
def mkdocs_build(mkdocs_config: MkDocsConfig) -> Generator[None, None, None]:
    mkdocs_config["plugins"].run_event("startup", command="build", dirty=False)
    build.build(mkdocs_config)
    mkdocs_config["plugins"].run_event("shutdown")

    yield

    rmtree(mkdocs_config["site_dir"])
