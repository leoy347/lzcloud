const hotSpotData = [
    [
        {
            "position": [
                2.6061860779828674,
                7.433918544326188,
                -28.082458771107724
            ],
            "cameraView": {
                "position": null,
                "target": null
            },
            "element": "<img xmlns='http://www.w3.org/1999/xhtml' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAvCAMAAAC18jgTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACvlBMVEUAAADnTDzAOSvnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDzAOSvAOSvAOSvAOSvnTDznTDzAOSvAOSvAOSvAOSvAOSvAOSvAOSvAOSvnTDznTDzAOSvAOSvAOSvAOSvnTDznTDznTDznTDzAOSvAOSvAOSvAOSvnTDzAOSvAOSvAOSvAOSvnTDznTDzAOSvAOSvnTDzAOSvAOSvAOSvAOSvAOSvAOSvnTDzAOSvnTDzAOSvAOSvAOSvnTDznTDznTDzAOSvAOSvAOSvnTDznTDznTDzAOSvAOSvAOSvAOSvAOSvnTDznTDznTDznTDzAOSvAOSvAOSvAOSvAOSvnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDzoTDzlSzviSTrhSTrjSjrXRDXPQDLJPS/EOy3PQDHWRDXiSjrcRzfAOSu/OSvIPS7bRjfmTDzTQjPDOizCOizSQjPUQzTDOyzZRTbHPS7GPC7BOSvNPzHLPzDkSzveRzjBOizcRjfQQTLOQDHJPi/gSDnFPC3eSDjgSTnMPzDfSDnHPC7WRDTkSjvfSDgAAAAbHy20AAAAuXRSTlMAAAAYTpbF3O7w3ceaUxsffc/09dODIxZ+14gptr8wONFBJc3VLhKxvHH+fyLY4Cv14N7zi8bujD8gHj2E6ho+5E0BRPNLdf39eGv6oMMSDLivtYh50P5fUPtpWrqWmdgn0Klm+6IIlXYt4qgtAp/46jkFp6l9eqbdCkz2+lkLsr0PP+zySgKQndrjLxTEzmAIDelEAYqYBBnKRvFSB6y5DEDtlKEGKOUygh5X92QJrQ4860ePnNt8iUMldKgAAAABYktHRACIBR1IAAAACXBIWXMAAAK8AAACvAAsAdHPAAAAB3RJTUUH5AYdASUjJ2RCdAAAAtRJREFUOMt1lAdbkzEQx5OisgTBwXKAKCg4wY1bEXCi4MKJiFscuAEVt+LeA/fee4VioYi+BbTFMt0T5WN4l7R9O+952lzu/3veyyWXEMKNgjk1aNjI2cXVzb2xhyfOiWw4beLl3ZQZrFnzFj7mCLi+fv7MwtwCPE0EOC1bMRtr3cZAwBAYxOyYf1tBUBrczhDKY8r8V0oYhLUPQYDS0A4GWVVQqC4qUr8ufmMgOjoBQWlYuJi+VUsajYS/ktIyEeqEQOcu3Fe+ey+ZTKtT8mDXbgB4CbiYK90jIntwp1xEe1IS2ot7pR8g2rtP335R/QcMxG/oeThoEBnsgo6qArIPGTpMgTY8EojKfIxHjyAxsVhAaZUkxY0EkRD4GzUaCD2vNoCM4RWWQ2TsONSRiB8Pxeh4jgkkgY/VkCFR6EhMBKCGl+pOJuFQWyJJk6fIwNQkWIQKFWcBKNXwhWkyMD1Okipq+amSGTxFIQAzZSARUlRzwZvM4ovEbZqdzKsAPWoOAOW8ihQyNxWBj1og5sXzbVDMXwCTT58RCF9IFi1GsOwLxJKWLE1TKNKSly2HyVd+GitWkvRVPJeqBlYhRaxes3bdenA03/hGsoQNhGZk8lV8r9TIp6n58ZOvIGsjnOamzeLgflVXmYDff0Qsews2zNZtYqYsqNNiu2jr/opuYNt38I7aucvYpv/q9Tqdvl5lnO9OF00ZvMfUyZA5z9izLGevse/DYu21PfMz3BxK9+23px/wlK+WR6atnnXQdDkpPZRiCyQcNr+9gUesddejZg8ApceOWwMnTpq/EJSeyrbUT/tYvCBAnMk11zPPWuoAnDtvDly4aAUAcemyrEdnWOt4JFdk4Oo1GwCI625G/cZNWx2JGMNDwW5R+4Cvu9CDbtvTkbhzF/XUe/Z1AO4/4CU+dAAA8egxY7lPHOlY6lPGnqU7BLD7nueEONaRePHSSv8PoTJomQk+BgwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMTlUMTA6NTE6MDErMDA6MDBQ+gh4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA4VDE5OjQ1OjEyKzAwOjAwFuH4SwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAyMzPP8xcQAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1OJ/MhxoAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU0Njk3NjcxMp4G7IoAAAASdEVYdFRodW1iOjpTaXplADEwMzgzQvuof6wAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9kYXRhL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL2ZpbGVzLzExOC8xMTg1NjU4LnBuZ9VKt4oAAAAASUVORK5CYII=' style='cursor: pointer; position: absolute; left: 978.702px; top: 234.98px; display: block;' />",
            "userData": {}
        },
        {
            "position": [
                -31.75062653806631,
                7.218627383725603,
                -3.2047143215248375
            ],
            "cameraView": {
                "position": null,
                "target": null
            },
            "element": "<img xmlns='http://www.w3.org/1999/xhtml' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAvCAMAAAC18jgTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACvlBMVEUAAADnTDzAOSvnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDzAOSvAOSvAOSvAOSvnTDznTDzAOSvAOSvAOSvAOSvAOSvAOSvAOSvAOSvnTDznTDzAOSvAOSvAOSvAOSvnTDznTDznTDznTDzAOSvAOSvAOSvAOSvnTDzAOSvAOSvAOSvAOSvnTDznTDzAOSvAOSvnTDzAOSvAOSvAOSvAOSvAOSvAOSvnTDzAOSvnTDzAOSvAOSvAOSvnTDznTDznTDzAOSvAOSvAOSvnTDznTDznTDzAOSvAOSvAOSvAOSvAOSvnTDznTDznTDznTDzAOSvAOSvAOSvAOSvAOSvnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDzoTDzlSzviSTrhSTrjSjrXRDXPQDLJPS/EOy3PQDHWRDXiSjrcRzfAOSu/OSvIPS7bRjfmTDzTQjPDOizCOizSQjPUQzTDOyzZRTbHPS7GPC7BOSvNPzHLPzDkSzveRzjBOizcRjfQQTLOQDHJPi/gSDnFPC3eSDjgSTnMPzDfSDnHPC7WRDTkSjvfSDgAAAAbHy20AAAAuXRSTlMAAAAYTpbF3O7w3ceaUxsffc/09dODIxZ+14gptr8wONFBJc3VLhKxvHH+fyLY4Cv14N7zi8bujD8gHj2E6ho+5E0BRPNLdf39eGv6oMMSDLivtYh50P5fUPtpWrqWmdgn0Klm+6IIlXYt4qgtAp/46jkFp6l9eqbdCkz2+lkLsr0PP+zySgKQndrjLxTEzmAIDelEAYqYBBnKRvFSB6y5DEDtlKEGKOUygh5X92QJrQ4860ePnNt8iUMldKgAAAABYktHRACIBR1IAAAACXBIWXMAAAK8AAACvAAsAdHPAAAAB3RJTUUH5AYdASUjJ2RCdAAAAtRJREFUOMt1lAdbkzEQx5OisgTBwXKAKCg4wY1bEXCi4MKJiFscuAEVt+LeA/fee4VioYi+BbTFMt0T5WN4l7R9O+952lzu/3veyyWXEMKNgjk1aNjI2cXVzb2xhyfOiWw4beLl3ZQZrFnzFj7mCLi+fv7MwtwCPE0EOC1bMRtr3cZAwBAYxOyYf1tBUBrczhDKY8r8V0oYhLUPQYDS0A4GWVVQqC4qUr8ufmMgOjoBQWlYuJi+VUsajYS/ktIyEeqEQOcu3Fe+ey+ZTKtT8mDXbgB4CbiYK90jIntwp1xEe1IS2ot7pR8g2rtP335R/QcMxG/oeThoEBnsgo6qArIPGTpMgTY8EojKfIxHjyAxsVhAaZUkxY0EkRD4GzUaCD2vNoCM4RWWQ2TsONSRiB8Pxeh4jgkkgY/VkCFR6EhMBKCGl+pOJuFQWyJJk6fIwNQkWIQKFWcBKNXwhWkyMD1Okipq+amSGTxFIQAzZSARUlRzwZvM4ovEbZqdzKsAPWoOAOW8ihQyNxWBj1og5sXzbVDMXwCTT58RCF9IFi1GsOwLxJKWLE1TKNKSly2HyVd+GitWkvRVPJeqBlYhRaxes3bdenA03/hGsoQNhGZk8lV8r9TIp6n58ZOvIGsjnOamzeLgflVXmYDff0Qsews2zNZtYqYsqNNiu2jr/opuYNt38I7aucvYpv/q9Tqdvl5lnO9OF00ZvMfUyZA5z9izLGevse/DYu21PfMz3BxK9+23px/wlK+WR6atnnXQdDkpPZRiCyQcNr+9gUesddejZg8ApceOWwMnTpq/EJSeyrbUT/tYvCBAnMk11zPPWuoAnDtvDly4aAUAcemyrEdnWOt4JFdk4Oo1GwCI625G/cZNWx2JGMNDwW5R+4Cvu9CDbtvTkbhzF/XUe/Z1AO4/4CU+dAAA8egxY7lPHOlY6lPGnqU7BLD7nueEONaRePHSSv8PoTJomQk+BgwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMTlUMTA6NTE6MDErMDA6MDBQ+gh4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA4VDE5OjQ1OjEyKzAwOjAwFuH4SwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAyMzPP8xcQAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1OJ/MhxoAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU0Njk3NjcxMp4G7IoAAAASdEVYdFRodW1iOjpTaXplADEwMzgzQvuof6wAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9kYXRhL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL2ZpbGVzLzExOC8xMTg1NjU4LnBuZ9VKt4oAAAAASUVORK5CYII=' style='cursor: pointer; position: absolute; left: 606.299px; top: 329.414px; display: block;' />",
            "userData": {}
        },
        {
            "position": [
                31.388234135978063,
                6.405135623046881,
                1.241202373943259
            ],
            "cameraView": {
                "position": [
                    -85.8559020018742,
                    58.41462837427557,
                    2.4474676543518084
                ],
                "target": [
                    -1.87499999526608e-7,
                    -0.000009884765623802139,
                    0
                ]
            },
            "element": "<div xmlns='http://www.w3.org/1999/xhtml' class='hot-spot' style='position: absolute; left: 1291.07px; top: 388.828px; display: block;'>文字</div>",
            "userData": {}
        },
        {
            "position": [
                -23.057898560598193,
                1.134085110090929,
                8.086984452855425
            ],
            "cameraView": {
                "position": [
                    59.31700295071686,
                    82.58560422367931,
                    21.22746848413595
                ],
                "target": [
                    -1.87499999526608e-7,
                    -0.000009884765623802139,
                    0
                ]
            },
            "element": "<div xmlns='http://www.w3.org/1999/xhtml' class='custom' style='position: absolute; left: 645.273px; top: 410.02px; display: block;'>热点</div>",
            "userData": {}
        },
        {
            "position": [
                -0.12471517708950615,
                0.9390132435572158,
                0.7337640508212429
            ],
            "objectId": 80,
            "cameraView": {
                "position": [
                    8.05640392651656,
                    22.061226992726674,
                    54.21402078090924
                ],
                "target": [
                    -1.87499999526608e-7,
                    -0.000009884765623802139,
                    0
                ]
            },
            "element": "<div xmlns='http://www.w3.org/1999/xhtml' class='hot-spot' style='position: absolute; left: 914.275px; top: 430.024px; display: block;'>模型热点</div>",
            "userData": {}
        }
    ]
]