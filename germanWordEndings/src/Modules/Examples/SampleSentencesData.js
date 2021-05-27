import React from 'react'
import { Text } from 'react-native'
const SampleSentenceEnglish = {
    'accusative': {
        'masculine': {
            'with': {//there is adj.
                'no': <Text>I've seen good man</Text>,//No article
                'indefinite': <Text>I've seen a good man</Text>, //indefinite article
                'definite': <Text>I've seen the good man</Text>//definite article
            },
            'without': {//no adj.
                'no': <Text>There is not a word with ending for this combination</Text>, // No article
                'indefinite': <Text>I've seen a man</Text>, //indefinite article
                'definite': <Text>I've seen the man</Text> //definite article
            }
        },
        'feminine': {
            'with': {
                'no': <Text>I've seen good woman</Text>,
                'indefinite': <Text>I've seen a good woman</Text>,
                'definite': <Text>I've seen the good woman</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've seen a woman</Text>,
                'definite': <Text>I've seen the woman</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>I've seen good child</Text>,
                'indefinite': <Text>I've seen a good child</Text>,
                'definite': <Text>I've seen the good child</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've seen a child</Text>,
                'definite': <Text>I've seen the child</Text>
            }
        }
    },
    'dative': {
        'masculine': {
            'with': {
                'no': <Text>I've helped to good man</Text>,
                'indefinite': <Text>I've helped to a good man</Text>,
                'definite': <Text>I've helped to the good man</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped to a man</Text>,
                'definite': <Text>I've helped to the man</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>I've helped to good woman</Text>,
                'indefinite': <Text>I've helped to a good woman</Text>,
                'definite': <Text>I've helped to the good woman</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped to a woman</Text>,
                'definite': <Text>I've helped to the woman</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>I've helped to good child</Text>,
                'indefinite': <Text>I've helped to a good child</Text>,
                'definite': <Text>I've helped to the good child</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped to a child</Text>,
                'definite': <Text>I've helped to the child</Text>
            }
        }
    },
    'nominative': {
        'masculine': {
            'with': {
                'no': <Text>Good man was looking for you</Text>,
                'indefinite': <Text>A good man was looking for you</Text>,
                'definite': <Text>The good man was looking for you</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>A man was looking for you</Text>,
                'definite': <Text>The man was looking for you</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Good woman was looking for you</Text>,
                'indefinite': <Text>A good woman was looking for you</Text>,
                'definite': <Text>The good woman was looking for you</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>A woman was looking for you</Text>,
                'definite': <Text>The woman was looking for you</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Good child was looking for you</Text>,
                'indefinite': <Text>A good child was looking for you</Text>,
                'definite': <Text>The good child was looking for you</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>A child was looking for you</Text>,
                'definite': <Text>The child was looking for you</Text>
            }
        }
    },
    'genitive': {
        'masculine': {
            'with': {
                'no': <Text>Money of good man is missing</Text>,
                'indefinite': <Text>Money of a good man is missing</Text>,
                'definite': <Text>Money of the good man is missing</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Money of a man is missing</Text>,
                'definite': <Text>Money of the man is missing</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Money of good woman is missing</Text>,
                'indefinite': <Text>Money of a good woman is missing</Text>,
                'definite': <Text>Money of the good woman is missing</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Money of a woman is missing</Text>,
                'definite': <Text>Money of the woman is missing</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Money of good child is missing</Text>,
                'indefinite': <Text>Money of a good child is missing</Text>,
                'definite': <Text>Money of the good child is missing</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Money of a child is missing</Text>,
                'definite': <Text>Money of the child is missing</Text>
            }
        }
    }
}
/*
const SampleSentenceGerman = {
    0: {
        0: {
            0: {
                'no': <Text>"Ich habe guten Mann gesehen"</Text>,
                'indefinite': <Text>"Ich habe einen guten Mann gesehen"</Text>,
                'definite': <Text>"Ich habe den guten Mann gesehen"</Text>
            }
        }
    }
};
*/
const SampleSentenceGerman = {
    'accusative': {
        'masculine': {
            'with': {//there is adj.
                'no': <Text>Ich habe guten Mann gesehen</Text>,//No article
                'indefinite': <Text>Ich habe einen guten Mann gesehen</Text>,//indefinite article
                'definite': <Text>Ich habe den guten Mann gesehen</Text>//definite article
            },
            'without': {//no adj.
                'no': <Text>There is not a word with ending for this combination</Text>, // No article
                'indefinite': <Text>I've seen a man</Text>, //indefinite article
                'definite': <Text>I've seen the man</Text> //definite article
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Ich habe gute Frau gesehen</Text>,
                'indefinite': <Text>I've seen a good woman</Text>,
                'definite': <Text>I've seen the good woman</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've seen a woman</Text>,
                'definite': <Text>I've seen the woman</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Ich habe gutes Kind gesehen</Text>,
                'indefinite': <Text>I've seen a good child</Text>,
                'definite': <Text>I've seen the good child</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've seen a child</Text>,
                'definite': <Text>I've seen the child</Text>
            }
        }
    },
    'dative': {
        'masculine': {
            'with': {
                'no': <Text>Ich habe gutem Mann geholfen</Text>,
                'indefinite': <Text>I've helped to a good man</Text>,
                'definite': <Text>I've helped to the good man</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped to a man</Text>,
                'definite': <Text>I've helped to the man</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Ich habe guter Frau geholfen</Text>,
                'indefinite': <Text>I've helped to a good woman</Text>,
                'definite': <Text>I've helped to the good woman</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped to a woman</Text>,
                'definite': <Text>I've helped to the woman</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Ich habe gutem Kind geholfen</Text>,
                'indefinite': <Text>I've helped to a good child</Text>,
                'definite': <Text>I've helped to the good child</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped to a child</Text>,
                'definite': <Text>I've helped to the child</Text>
            }
        }
    },
    'nominative': {
        'masculine': {
            'with': {
                'no': <Text>Good man was looking for you</Text>,
                'indefinite': <Text>A good man was looking for you</Text>,
                'definite': <Text>The good man was looking for you</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>A man was looking for you</Text>,
                'definite': <Text>The man was looking for you</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Good woman was looking for you</Text>,
                'indefinite': <Text>A good woman was looking for you</Text>,
                'definite': <Text>The good woman was looking for you</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>A woman was looking for you</Text>,
                'definite': <Text>The woman was looking for you</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Good child was looking for you</Text>,
                'indefinite': <Text>A good child was looking for you</Text>,
                'definite': <Text>The good child was looking for you</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>A child was looking for you</Text>,
                'definite': <Text>The child was looking for you</Text>
            }
        }
    },
    'genitive': {
        'masculine': {
            'with': {
                'no': <Text>Money of good man is missing</Text>,
                'indefinite': <Text>Money of a good man is missing</Text>,
                'definite': <Text>Money of the good man is missing</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Money of a man is missing</Text>,
                'definite': <Text>Money of the man is missing</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Money of good woman is missing</Text>,
                'indefinite': <Text>Money of a good woman is missing</Text>,
                'definite': <Text>Money of the good woman is missing</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Money of a woman is missing</Text>,
                'definite': <Text>Money of the woman is missing</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Money of good child is missing</Text>,
                'indefinite': <Text>Money of a good child is missing</Text>,
                'definite': <Text>Money of the good child is missing</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Money of a child is missing</Text>,
                'definite': <Text>Money of the child is missing</Text>
            }
        }
    }
}

export { SampleSentenceEnglish }

export { SampleSentenceGerman }