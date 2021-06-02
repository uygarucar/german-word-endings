const TablesData = [
    {
        id: 1,
        title: 'Only definite article',
        isMultiline: false,
        content: {
            nominative: {
                masculine: "der",
                feminine: "die",
                neuter: "das",
                plural: "die"
            },
            accusative: {
                masculine: "den",
                feminine: "die",
                neuter: "das",
                plural: "die",
            },
            dative: {
                masculine: "dem",
                feminine: "der",
                neuter: "dem",
                plural: "den + n"
            },
            genitive: {
                masculine: "des + s/es",
                feminine: "der",
                neuter: "des + s/es",
                plural: "der"
            }
        }
    },
    {
        id: 2,
        title: 'Only adjective',
        isMultiline: false,
        content: {
            nominative: {
                masculine: "guter",
                feminine: "gute",
                neuter: "gutes",
                plural: "gute"
            },
            accusative: {
                masculine: "guten",
                feminine: "gute",
                neuter: "gutes",
                plural: "gute",
            },
            dative: {
                masculine: "gutem",
                feminine: "guter",
                neuter: "gutem",
                plural: "guten"
            },
            genitive: {
                masculine: "guten + s",
                feminine: "guter",
                neuter: "guten + s",
                plural: "guter"
            }
        }
    },
    {
        id: 3,
        title: 'Definite + adjective',
        isMultiline: true,
        content: {
            nominative: {
                masculine: {
                    article: "der",
                    adjective: "gute"
                },
                feminine: {
                    article: "die",
                    adjective: "gute"
                },
                neuter: {
                    article: "das",
                    adjective: "gute"
                },
                plural: {
                    article: "die",
                    adjective: "guten"
                }
            }, 
            accusative: {
                masculine: {
                    article: "den",
                    adjective: "guten"
                },
                feminine: {
                    article: "die",
                    adjective: "gute"
                },
                neuter: {
                    article: "das",
                    adjective: "gute"
                },
                plural: {
                    article: "die",
                    adjective: "guten"
                }
            },
            dative: {
                masculine: {
                    article: "dem",
                    adjective: "guten"
                },
                feminine: {
                    article: "der",
                    adjective: "guten"
                },
                neuter: {
                    article: "dem",
                    adjective: "guten"
                },
                plural: {
                    article: "den",
                    adjective: "guten"
                }
            },
            genitive: {
                masculine: {
                    article: "des",
                    adjective: "guten"
                },
                feminine: {
                    article: "der",
                    adjective: "guten"
                },
                neuter: {
                    article: "des",
                    adjective: "guten"
                },
                plural: {
                    article: "der",
                    adjective: "guten"
                }
            }
        }
    },
    {
        id: 4,
        title: 'Only indefinite article',
        isMultiline: false,
        content: {
            nominative: {
                masculine: "ein",
                feminine: "eine",
                neuter: "ein",
                plural: "keine"
            },
            accusative: {
                masculine: "einen",
                feminine: "eine",
                neuter: "ein",
                plural: "keine",
            },
            dative: {
                masculine: "einem",
                feminine: "einer",
                neuter: "einem",
                plural: "keinen + n"
            },
            genitive: {
                masculine: "eines + s/es",
                feminine: "einer",
                neuter: "eines + s/es",
                plural: "keiner"
            }
        }
    },
    {
        id: 5,
        title: 'Indefinite + adjective',
        isMultiline: true,
        content: {
            nominative: {
                masculine: {
                    article: "ein",
                    adjective: "guter"
                },
                feminine: {
                    article: "eine",
                    adjective: "gute"
                },
                neuter: {
                    article: "ein",
                    adjective: "gutes"
                },
                plural: {
                    article: "keine",
                    adjective: "guten"
                }
            }, 
            accusative: {
                masculine: {
                    article: "einen",
                    adjective: "guter"
                },
                feminine: {
                    article: "eine",
                    adjective: "gute"
                },
                neuter: {
                    article: "ein",
                    adjective: "gutes"
                },
                plural: {
                    article: "keine",
                    adjective: "guten"
                }
            },
            dative: {
                masculine: {
                    article: "einem",
                    adjective: "guten"
                },
                feminine: {
                    article: "einer",
                    adjective: "guten"
                },
                neuter: {
                    article: "einem",
                    adjective: "guten"
                },
                plural: {
                    article: "keinen",
                    adjective: "guten"
                }
            },
            genitive: {
                masculine: {
                    article: "eines",
                    adjective: "guten"
                },
                feminine: {
                    article: "einer",
                    adjective: "guten"
                },
                neuter: {
                    article: "eines",
                    adjective: "guten"
                },
                plural: {
                    article: "keiner",
                    adjective: "guten"
                }
            }
        }
    }
]

export default TablesData