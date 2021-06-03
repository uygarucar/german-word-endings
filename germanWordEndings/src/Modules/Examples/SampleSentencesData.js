import React from 'react'
import { Text } from 'react-native'
const SampleSentenceEnglish = {
    'nominative': {
        'masculine': {
            'with': {
                'no': <Text>Yellowish cheese is popular among many people</Text>,
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
                'no': <Text>Sweet sauce is popular among many people</Text>,
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
                'no': <Text>Warm ice cream is not appealing to me</Text>,
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
    'accusative': {
        'masculine': {
            'with': {//there is adj.
                'no': <Text>He eats red apple</Text>,//No article
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
                'no': <Text>He eats fried potato</Text>,
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
                'no': <Text>He eats fresh bread</Text>,
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
                'no': <Text>Pizza tastes best with red wine</Text>,
                'indefinite': <Text>I've helped a good man</Text>,
                'definite': <Text>I've helped the good man</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped a man</Text>,
                'definite': <Text>I've helped the man</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Beer tastes best with fried potato</Text>,
                'indefinite': <Text>I've helped a good woman</Text>,
                'definite': <Text>I've helped the good woman</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped a woman</Text>,
                'definite': <Text>I've helped the woman</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Cheese tastes best with fresh bread</Text>,
                'indefinite': <Text>I've helped a good child</Text>,
                'definite': <Text>I've helped the good child</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>I've helped a child</Text>,
                'definite': <Text>I've helped the child</Text>
            }
        }
    },
    'genitive': {
        'masculine': {
            'with': {
                'no': <Text>I like the taste of white wine</Text>,
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
                'no': <Text>I like the taste of fried potato</Text>,
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
                'no': <Text>I like the smell of fresh bread</Text>,
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
///////////////////////////////////German////////////////////////////////////////////////
const SampleSentenceGerman = {
    'nominative': {
        'masculine': {
            'with': {
                'no': <Text>Gelblicher Käse ist bei vielen Menschen beliebt</Text>,
                'indefinite': <Text>Ein guter Mann hat dich gesucht</Text>,
                'definite': <Text>Der gute Mann hat dich gesucht</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ein Mann hat dich gesucht</Text>,
                'definite': <Text>Der Mann hat dich gesucht</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Süße Sauce ist bei vielen Menschen beliebt.</Text>,
                'indefinite': <Text>Eine gute Frau hat dich gesucht</Text>,
                'definite': <Text>Die gute Frau hat dich gesucht</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Eine Frau hat dich gesucht</Text>,
                'definite': <Text>Die Frau hat dich gesucht</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Warmes Eis gefällt mir nicht</Text>,
                'indefinite': <Text>Ein gutes Kind hat dich gesucht</Text>,
                'definite': <Text>Das gute Kind hat dich gesucht</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ein Kind hat dich gesucht</Text>,
                'definite': <Text>Das Kind hat dich gesucht</Text>
            }
        }
    },
    'accusative': {
        'masculine': {
            'with': {//there is adj.
                'no': <Text>Er isst roten Apfel</Text>,//No article
                'indefinite': <Text>Ich habe einen guten Mann gesehen</Text>,//indefinite article
                'definite': <Text>Ich habe den guten Mann gesehen</Text>//definite article
            },
            'without': {//no adj.
                'no': <Text>There is not a word with ending for this combination</Text>, // No article
                'indefinite': <Text>Ich habe einen Mann gesehen</Text>, //indefinite article
                'definite': <Text>Ich habe den Mann gesehen</Text> //definite article
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Er isst gebratene Kartoffel</Text>,
                'indefinite': <Text>Ich habe eine gute Frau gesehen</Text>,
                'definite': <Text>Ich habe die gute Frau gesehen</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ich habe eine Frau gesehen</Text>,
                'definite': <Text>Ich habe die Frau gesehen</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Er isst frisches Brot</Text>,
                'indefinite': <Text>Ich habe ein gutes Kind gesehen </Text>,
                'definite': <Text>Ich habe das gute Kind gesehen</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ich habe ein Kind gesehen</Text>,
                'definite': <Text>Ich habe das Kind gesehen</Text>
            }
        }
    },
    'dative': {
        'masculine': {
            'with': {
                'no': <Text>Pizza schmeckt am besten mit rotem Wein.</Text>,
                'indefinite': <Text>Ich habe einem guten Mann geholfen</Text>,
                'definite': <Text>Ich habe dem guten Mann geholfen</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ich habe einem Mann geholfen</Text>,
                'definite': <Text>Ich habe dem Mann geholfen</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Bier schmeckt am besten mit gebratener Kartoffel</Text>,
                'indefinite': <Text>Ich habe einer guten Frau geholfen</Text>,
                'definite': <Text>Ich habe der guten Frau geholfen</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ich habe einer Frau geholfen</Text>,
                'definite': <Text>Ich habe der Frau geholfen</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Käse schmeckt am besten mit frischem Brot</Text>,
                'indefinite': <Text>Ich habe einem guten Kind geholfen</Text>,
                'definite': <Text>Ich habe dem guten Kind geholfen</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Ich habe einem Kind geholfen</Text>,
                'definite': <Text>Ich habe dem Kind geholfen</Text>
            }
        }
    },
    'genitive': {
        'masculine': {
            'with': {
                'no': <Text>Ich mag den Geschmack weißen Weins</Text>,
                'indefinite': <Text>Das Geld eines guten Mannes fehlt</Text>,
                'definite': <Text>Das Geld des guten Mannes fehlt</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Geld eines Mannes fehlt</Text>,
                'definite': <Text>Geld des Mannes fehlt</Text>
            }
        },
        'feminine': {
            'with': {
                'no': <Text>Ich mag den Geschmack gebratener Kartoffel</Text>,
                'indefinite': <Text>Das Geld einer guten Frau fehlt</Text>,
                'definite': <Text>Das Geld der guten Frau fehlt</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Geld einer Frau fehlt</Text>,
                'definite': <Text>Geld der Frau fehlt</Text>
            }
        },
        'neutral': {
            'with': {
                'no': <Text>Ich mag den Geruch frischen Brots</Text>,
                'indefinite': <Text>Das Geld eines guten Kindes fehlt</Text>,
                'definite': <Text>Das Geld des guten Kindes fehlt</Text>
            },
            'without': {
                'no': <Text>There is not a word with ending for this combination</Text>,
                'indefinite': <Text>Geld eines Kindes fehlt</Text>,
                'definite': <Text>Geld des Kindes fehlt</Text>
            }
        }
    }
}

export { SampleSentenceEnglish }

export { SampleSentenceGerman }