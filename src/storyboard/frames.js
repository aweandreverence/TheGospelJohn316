const _ = require('lodash');

const StoryboardFrames = [
    // 0
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'GOD',
                    x: 30,
                    y: 30,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'slash',
                    x: 70,
                    y: 30,
                    z: 1
                },
                {
                    key: 'man',
                    x: 80,
                    y: 30,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'lineToLife',
                    x: 135,
                    y: 42,
                    z: 1
                },
                {
                    key: 'life',
                    x: 430,
                    y: 30,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'redX',
                    x: 90,
                    y: 6,
                    z: 2
                },
                {
                    key: 'man',
                    x: 30,
                    y: 200,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'lineToDeath',
                    x: 84,
                    y: 212,
                    z: 1
                },
                {
                    key: 'death',
                    x: 406,
                    y: 200,
                    z: 1
                }
            ]
        }
    },
    // 5
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'sin',
                    x: 275,
                    y: 83,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'sin',
                    x: 95,
                    y: 215,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'tree',
                    x: 70,
                    y: 50,
                    z: 2
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'sins',
                    x: 130,
                    y: 15,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'chair',
                    x: 305,
                    y: 108,
                    z: 1
                }
            ]
        }
    },
    // 10
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'sIn',
                    x: 292,
                    y: 125,
                    z: 1
                },
                {
                    key: 'crown',
                    x: 295,
                    y: -3,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: -6,
            add: []
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'lineToGoodWorks',
                    x: 100,
                    y: 165,
                    z: 1
                },
                {
                    key: 'goodWorks',
                    x: 80,
                    y: 115,
                    z: 1
                },
                {
                    key: 'arrowUp',
                    x: 91,
                    y: 150,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'lineToJoinChurch',
                    x: 150,
                    y: 135,
                    z: 1
                },
                {
                    key: 'joinChurch',
                    x: 128,
                    y: 90,
                    z: 1
                },
                {
                    key: 'arrowUp',
                    x: 141,
                    y: 122,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'lineToGoodWorks',
                    x: 200,
                    y: 165,
                    z: 1
                },
                {
                    key: 'otherReligion',
                    x: 175,
                    y: 115,
                    z: 1
                },
                {
                    key: 'arrowUp',
                    x: 191,
                    y: 150,
                    z: 1
                }
            ]
        }
    },
    // 15
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'john316Bible',
                    x: 340,
                    y: 60,
                    z: 1
                },
                {
                    key: 'crossLeft',
                    x: 275,
                    y: 42,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: -2,
            add: [
                {
                    key: 'crossLeft',
                    x: 275,
                    y: 42,
                    z: 2
                },
                {
                    key: 'JESUS',
                    x: 249,
                    y: 79,
                    z: 1000
                },
                {
                    key: 'crossRight',
                    x: 315,
                    y: 42,
                    z: 2
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'whiteToDeath',
                    x: 318,
                    y: 212,
                    z: 2
                },
                {
                    key: 'redArrows',
                    x: 323,
                    y: 169,
                    z: 3
                }
            ]
        }
    },
    {
        layout: {
            foundation: -2,
            add: [
                {
                    key: 'whiteToDeath',
                    x: 318,
                    y: 212,
                    z: 2
                },
                {
                    key: '()ToDeath',
                    x: 320,
                    y: 193,
                    z: 3
                }
            ]
        }
    },
    {
        layout: {
            foundation: 'auto',
            add: [
                {
                    key: 'whiteToLife',
                    x: 135,
                    y: 42,
                    z: 2
                },
                {
                    key: '()ToLife',
                    x: 125,
                    y: 23,
                    z: 3
                }
            ]
        }
    },
    // 20
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'verse-philippians-2:7-8',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'verse-john-14:6',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'verse-hebrews-9:22',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'callToAction',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'verse-john-3:36',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'verse-romans-10:9-10',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'verse-romans-10:13',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    },
    {
        layout: {
            foundation: null,
            add: [
                {
                    key: 'sinnersPrayer',
                    x: 0,
                    y: 0,
                    z: 1
                }
            ]
        }
    }
];

export const StoryboardFramesMap = {};

_.forEach(StoryboardFrames, (frame, i) => {
    StoryboardFramesMap[i] = frame;
});
