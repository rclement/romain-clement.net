import requests

import pytest


@pytest.mark.parametrize(
    "path",
    [
        "/",
        "/company/",
        "/projects/",
        "/talks/",
        "/articles/",
        "/music/",
        "/contact/",
        "/.well-known/keybase.txt",
        "/.well-known/openpgpkey/policy",
        "/.well-known/openpgpkey/hu/dj3498u4hyyarh35rkjfnghbjxug6b19",
    ],
)
def test_url_accessible(base_url: str, path: str) -> None:
    response = requests.get(f"{base_url}{path}", timeout=30)
    assert response.status_code == 200
