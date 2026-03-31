import pytest


def pytest_addoption(parser: pytest.Parser) -> None:
    parser.addoption(
        "--base-url",
        action="store",
        required=True,
        help="Base URL of the deployed site to test against",
    )


@pytest.fixture(scope="session")
def base_url(request: pytest.FixtureRequest) -> str:
    url: str = request.config.getoption("--base-url")
    return url.rstrip("/")
