import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, Animated } from 'react-native'
import { useDispatch } from 'react-redux'

import { setYellowTextAC } from '../../Redux/YellowTextRedux'
import { setGreenTextAC } from '../../Redux/GreenTextRedux'
import { setPinkTextAC } from '../../Redux/PinkTextRedux'
import { setOrangeTextAC } from '../../Redux/OrangeTextRedux'

const SampleSentences = (props) => {
    const dispatch = useDispatch()
    const EnglishSamples = {
        'nominative': {
            'masculine': {
                'with': {
                    'no': <Text>
                        <Animated.Text style={props.pinkStyle}>Yellowish </Animated.Text>
                        <Animated.Text style={props.greenStyle}>cheese </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>is </Animated.Text>
                        popular among many people</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>
                        <Text>looking for </Text>
                        <Text>you</Text>
                    </Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text> looking for you
                    </Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text> looking for you</Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text> <Animated.Text style={props.orangeStyle}>was </Animated.Text> looking for you</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>
                        <Animated.Text style={props.pinkStyle}>Sweet </Animated.Text>
                        <Animated.Text style={props.greenStyle}>sauce </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>is </Animated.Text>popular among many people</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text> <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>
                        <Animated.Text style={props.pinkStyle}>Warm </Animated.Text>
                        <Animated.Text style={props.greenStyle}>ice cream </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>is </Animated.Text>not appealing to me</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>
                        looking for you</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>
                        looking for you</Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>
                }
            }
        },
        'accusative': {
            'masculine': {
                'with': {//there is adj.
                    'no': <Text>He eats
                        <Animated.Text style={props.pinkStyle}> red </Animated.Text>
                        <Animated.Text style={props.greenStyle}>apple </Animated.Text></Text>,//No article
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text></Text>, //indefinite article
                    'definite': <Text>
                        I've <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text></Text>//definite article
                },
                'without': {//no adj.
                    'no': <Text>There is not a word with ending for this combination</Text>, // No article
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man</Animated.Text> </Text>, //indefinite article
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                    </Text> //definite article
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>He
                        <Animated.Text style={props.orangeStyle}>eats </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fried </Animated.Text>
                        <Animated.Text style={props.greenStyle}>potato</Animated.Text></Text>,
                    'indefinite': <Text>
                        I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>He
                        <Animated.Text style={props.orangeStyle}>eats </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fresh </Animated.Text>
                        <Animated.Text style={props.greenStyle}>bread </Animated.Text></Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>
                }
            }
        },
        'dative': {
            'masculine': {
                'with': {
                    'no': <Text>Pizza tastes best
                        <Animated.Text style={props.orangeStyle}>with </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>red </Animated.Text>
                        <Animated.Text style={props.greenStyle}>wine </Animated.Text>
                    </Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                    </Text>,
                    'definite': <Text>
                        I've <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                    </Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man</Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text></Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>Beer tastes best
                        <Animated.Text style={props.orangeStyle}>with </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fried </Animated.Text>potato</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>Cheese tastes best
                        <Animated.Text style={props.orangeStyle}>with </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fresh </Animated.Text>
                        <Animated.Text style={props.greenStyle}>bread </Animated.Text>
                    </Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}>helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>
                }
            }
        },
        'genitive': {
            'masculine': {
                'with': {
                    'no': <Text>I like the taste
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>white </Animated.Text>
                        <Animated.Text style={props.greenStyle}>wine </Animated.Text>
                    </Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>I like the taste
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fried </Animated.Text>
                        <Animated.Text style={props.greenStyle}>potato </Animated.Text>
                    </Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>is missing</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        is missing</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>I like the smell 
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fresh </Animated.Text>
                        <Animated.Text style={props.greenStyle}>bread </Animated.Text>
                        </Text>,
                    'indefinite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>is missing</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}>of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        is missing</Text>
                }
            }
        }
    }
    ///////////////////////////////////German////////////////////////////////////////////////
    const GermanSamples = {
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
    const sentenceToDisplay = props.isGerman
        ?
        <Text style={[props.styleSamplesFontSize, { flex: 1, textAlignVertical: 'center' }]}>
            {GermanSamples[props.caseType][props.nounGenderType][props.hasAdjective][props.articleType]}
        </Text>
        :
        <Text style={props.styleSamplesFontSize}>
            {EnglishSamples[props.caseType][props.nounGenderType][props.hasAdjective][props.articleType]}
        </Text>

    //Remaining of the color when switching language fixed
    useEffect(() => {
        if (props.isGerman) {
            dispatch(setYellowTextAC('rgb(105,105,105)'));
            dispatch(setGreenTextAC('rgb(105,105,105)'));
            dispatch(setPinkTextAC('rgb(105,105,105)'));
            dispatch(setOrangeTextAC('rgb(105,105,105)'));
        }
    }, [props.isGerman])

    return (
        <TouchableOpacity onPress={props.onPress_FlipCard} style={[props.styleButton, { flex: 1 }]}>

            {!props.isGerman ? <Text style={props.styleClickMessage}>Click to see in German</Text> : null}
            {sentenceToDisplay}

        </TouchableOpacity>
    );
}

export { SampleSentences }
