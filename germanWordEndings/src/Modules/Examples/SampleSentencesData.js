import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, Animated } from 'react-native'
import { useDispatch } from 'react-redux'

import { setYellowTextAC } from '../../Redux/YellowTextRedux'
import { setGreenTextAC } from '../../Redux/GreenTextRedux'
import { setPinkTextAC } from '../../Redux/PinkTextRedux'
import { setOrangeTextAC } from '../../Redux/OrangeTextRedux'

const SampleSentences = (props) => {
    const black={
        color: 'black'
    }

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
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you
                    </Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>,
                    'definite': <Text>
                        <Animated.Text style={props.yellowStyle}>The </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man</Animated.Text> <Animated.Text style={props.orangeStyle}>was </Animated.Text>looking for you</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>
                        <Animated.Text style={props.pinkStyle}>Sweet </Animated.Text>
                        <Animated.Text style={props.greenStyle}>sauce </Animated.Text>
                        <Animated.Text style={props.orangeStyle}>is </Animated.Text>popular among many people</Text>,
                    'indefinite': <Text>
                        <Animated.Text style={props.yellowStyle}>A</Animated.Text> <Animated.Text style={props.pinkStyle}>good </Animated.Text>
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
                    'no': <Text>He 
                        <Animated.Text style={props.orangeStyle}> eats </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>red </Animated.Text>
                        <Animated.Text style={props.greenStyle}>apple </Animated.Text></Text>,//No article
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
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
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man</Animated.Text> </Text>, //indefinite article
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                    </Text> //definite article
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>He
                        <Animated.Text style={props.orangeStyle}> eats </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fried </Animated.Text>
                        <Animated.Text style={props.greenStyle}>potato</Animated.Text></Text>,
                    'indefinite': <Text>
                        I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>
                        I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text></Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>He
                        <Animated.Text style={props.orangeStyle}> eats </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fresh </Animated.Text>
                        <Animated.Text style={props.greenStyle}>bread </Animated.Text></Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> seen </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>
                }
            }
        },
        'dative': {
            'masculine': {
                'with': {
                    'no': <Text>Pizza tastes best
                        <Animated.Text style={props.orangeStyle}> with </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>red </Animated.Text>
                        <Animated.Text style={props.greenStyle}>wine </Animated.Text>
                    </Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
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
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man</Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text></Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>Beer tastes best
                        <Animated.Text style={props.orangeStyle}> with </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fried </Animated.Text>
                        <Animated.Text style={props.greenStyle}>potato</Animated.Text></Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                    </Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>Cheese tastes best
                        <Animated.Text style={props.orangeStyle}> with </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fresh </Animated.Text>
                        <Animated.Text style={props.greenStyle}>bread </Animated.Text>
                    </Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                    </Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text></Text>,
                    'definite': <Text>I've
                        <Animated.Text style={props.orangeStyle}> helped </Animated.Text>
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
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>white </Animated.Text>
                        <Animated.Text style={props.greenStyle}>wine </Animated.Text>
                    </Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>man </Animated.Text>
                        is missing</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>I like the taste
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fried </Animated.Text>
                        <Animated.Text style={props.greenStyle}>potato </Animated.Text>
                    </Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>is missing</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.greenStyle}>woman </Animated.Text>
                        is missing</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>I like the smell 
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>fresh </Animated.Text>
                        <Animated.Text style={props.greenStyle}>bread </Animated.Text>
                        </Text>,
                    'indefinite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>the </Animated.Text>
                        <Animated.Text style={props.pinkStyle}>good </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>is missing</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
                        <Animated.Text style={props.yellowStyle}>a </Animated.Text>
                        <Animated.Text style={props.greenStyle}>child </Animated.Text>
                        is missing</Text>,
                    'definite': <Text>Money 
                        <Animated.Text style={props.orangeStyle}> of </Animated.Text>
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
                    'no': <Text>Gelblich<Text style={black}>er</Text> Käse ist bei vielen Menschen beliebt</Text>,
                    'indefinite': <Text>Ein gut<Text style={black}>er</Text> Mann hat dich gesucht</Text>,
                    'definite': <Text><Text style={black}>Der</Text> gut<Text style={black}>e</Text> Mann hat dich gesucht</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ein Mann hat dich gesucht</Text>,
                    'definite': <Text><Text style={black}>Der</Text> Mann hat dich gesucht</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>Süß<Text style={black}>e</Text> Sauce ist bei vielen Menschen beliebt.</Text>,
                    'indefinite': <Text>Ein<Text style={black}>e</Text> gut<Text style={black}>e</Text> Frau hat dich gesucht</Text>,
                    'definite': <Text><Text style={black}>Die</Text> gut<Text style={black}>e</Text> Frau hat dich gesucht</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ein<Text style={black}>e</Text> Frau hat dich gesucht</Text>,
                    'definite': <Text><Text style={black}>Die</Text> Frau hat dich gesucht</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>Warm<Text style={black}>es</Text> Eis gefällt mir nicht</Text>,
                    'indefinite': <Text>Ein gut<Text style={black}>es</Text> Kind hat dich gesucht</Text>,
                    'definite': <Text><Text style={black}>Das</Text> gut<Text style={black}>e</Text> Kind hat dich gesucht</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ein Kind hat dich gesucht</Text>,
                    'definite': <Text><Text style={black}>Das</Text> Kind hat dich gesucht</Text>
                }
            }
        },
        'accusative': {
            'masculine': {
                'with': {//there is adj.
                    'no': <Text>Er isst rot<Text style={black}>en</Text> Apfel</Text>,//No article
                    'indefinite': <Text>Ich habe ein<Text style={black}>en</Text> gut<Text style={black}>en</Text> Mann gesehen</Text>,//indefinite article
                    'definite': <Text>Ich habe <Text style={black}>den</Text> gut<Text style={black}>en</Text> Mann gesehen</Text>//definite article
                },
                'without': {//no adj.
                    'no': <Text>There is not a word with ending for this combination</Text>, // No article
                    'indefinite': <Text>Ich habe ein<Text style={black}>en</Text> Mann gesehen</Text>, //indefinite article
                    'definite': <Text>Ich habe <Text style={black}>den</Text> Mann gesehen</Text> //definite article
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>Er isst gebraten<Text style={black}>e</Text> Kartoffel</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>e</Text> gut<Text style={black}>e</Text> Frau gesehen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>die</Text> gut<Text style={black}>e</Text> Frau gesehen</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>e</Text>  Frau gesehen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>die</Text> Frau gesehen</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>Er isst frisch<Text style={black}>es</Text> Brot</Text>,
                    'indefinite': <Text>Ich habe ein gut<Text style={black}>es</Text> Kind gesehen </Text>,
                    'definite': <Text>Ich habe <Text style={black}>das</Text> gut<Text style={black}>e</Text> Kind gesehen</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ich habe ein Kind gesehen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>das</Text> Kind gesehen</Text>
                }
            }
        },
        'dative': {
            'masculine': {
                'with': {
                    'no': <Text>Pizza schmeckt am besten mit rot<Text style={black}>em</Text> Wein.</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>em</Text> gut<Text style={black}>en</Text> Mann geholfen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>dem</Text> gut<Text style={black}>en</Text> Mann geholfen</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>em</Text> Mann geholfen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>dem</Text> Mann geholfen</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>Bier schmeckt am besten mit gebraten<Text style={black}>er</Text> Kartoffel</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>er</Text> gut<Text style={black}>en</Text> Frau geholfen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>der</Text> gut<Text style={black}>en</Text> Frau geholfen</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>er</Text> Frau geholfen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>der</Text> Frau geholfen</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>Käse schmeckt am besten mit frisch<Text style={black}>em</Text> Brot</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>em</Text> gut<Text style={black}>en</Text> Kind geholfen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>dem</Text> gut<Text style={black}>en</Text> Kind geholfen</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Ich habe ein<Text style={black}>em</Text> Kind geholfen</Text>,
                    'definite': <Text>Ich habe <Text style={black}>dem</Text> Kind geholfen</Text>
                }
            }
        },
        'genitive': {
            'masculine': {
                'with': {
                    'no': <Text>Ich mag den Geschmack weiß<Text style={black}>en</Text> Wein<Text style={black}>s</Text></Text>,
                    'indefinite': <Text>Das Geld ein<Text style={black}>es</Text> gut<Text style={black}>en</Text> Mann<Text style={black}>es</Text> fehlt</Text>,
                    'definite': <Text>Das Geld <Text style={black}>des</Text> gut<Text style={black}>en</Text> Mann<Text style={black}>es</Text> fehlt</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Geld ein<Text style={black}>es</Text> Mann<Text style={black}>es</Text> fehlt</Text>,
                    'definite': <Text>Geld <Text style={black}>des</Text> Mann<Text style={black}>es</Text> fehlt</Text>
                }
            },
            'feminine': {
                'with': {
                    'no': <Text>Ich mag den Geschmack gebraten<Text style={black}>er</Text> Kartoffel</Text>,
                    'indefinite': <Text>Das Geld ein<Text style={black}>er</Text> gut<Text style={black}>en</Text> Frau fehlt</Text>,
                    'definite': <Text>Das Geld <Text style={black}>der</Text> gut<Text style={black}>en</Text> Frau fehlt</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Geld ein<Text style={black}>er</Text> Frau fehlt</Text>,
                    'definite': <Text>Geld <Text style={black}>der</Text> Frau fehlt</Text>
                }
            },
            'neutral': {
                'with': {
                    'no': <Text>Ich mag den Geruch frisch<Text style={black}>en</Text> Brot<Text style={black}>s</Text></Text>,
                    'indefinite': <Text>Das Geld ein<Text style={black}>es</Text> gut<Text style={black}>en</Text> Kind<Text style={black}>es</Text> fehlt</Text>,
                    'definite': <Text>Das Geld <Text style={black}>des</Text> gut<Text style={black}>en</Text> Kind<Text style={black}>es</Text> fehlt</Text>
                },
                'without': {
                    'no': <Text>There is not a word with ending for this combination</Text>,
                    'indefinite': <Text>Geld ein<Text style={black}>es</Text> Kind<Text style={black}>es</Text> fehlt</Text>,
                    'definite': <Text>Geld <Text style={black}>des</Text> Kind<Text style={black}>es</Text> fehlt</Text>
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
