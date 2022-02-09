

export const ArtPeriods = [
    {
        title: "Renaissance",
        text: " is a french word meaning rebirth, now used in English to describe the great revival of art in Italy from about 1400 under the influence of the rediscovery of classical art and culture. The Renaissance reached its peak (known as the High Renaissance) in the short period from about 1500 to 1530 in Michelangelo, Leonardo DaVinci, and Raphael. The work of Raphael represents the purest form of the Renaissance style, and he held up as a prime model in the art academies until the mid-nineteenth century when artists turned their back on this classically governed approach. The revolt can be seen in movements such as the Pre-Raphaelites (who drew inspiration from medieval art), Realism, Naturalism, and Impressionism.",
        year: "1400",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Renaissance"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }

    },
    {
        title: "Realism",
        text: "  was a term coined by the French novelist Champfleury in the 1840s. In practice, realist subject matter meant scenes of peasant and working-class life, the life of the city streets, cafes, and popular entertainments, and an increasing frankness in the treatment of the body and sexual subjects. The term generally implies a certain grittiness in the choice of subject. Such subject matter combined with the new naturalism of treatment caused shock among the predominantly upper and middle-class audiences for art. Though never a coherent group, Realism is recognized as the first modern movement in art, which rejected traditional forms of art, literature, and social organization as outmoded in the wake of the Enlightenment and the Industrial Revolution.In France in the 1840s, Realism revolutionized painting, expanding conceptions of what constituted art.Working in a chaotic era marked by revolution and widespread social change, Realist painters replaced the romantic images and literary conceits of traditional art with real - life events, giving the margins of society similar weight to grand history paintings and allegories.Their choice to bring everyday life into their canvases was an early manifestation of the avant- garde desire to merge art and life.",
        year: "1840",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Realism"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }

    },
    {
        title: "Impressionism",
        text: " was born in France in the 19th century. Impressionist artists were influenced by the artist John Constable and the manner of the painting of some of the British realist painters. In the Impressionist era, artists abandoned their studies and began to paint outdoors in a more spontaneous and freeway.The Impressionists discovered that they could capture the momentary and transient effects of sunlight by working quickly, in front of their subjects, outdoors(en Plein air) rather than in a studio.This resulted in a heightened awareness of light and color and the changing pattern of the natural scene.The brushwork became fast and was divided into separate brush strokes to represent the fleeting quality of light. The first group exhibition was in 1874 at the Marmottan Museum in Paris and included Claude Monet, Auguste Renoir, Edgar Degas, and Paul Cezanne.Seven more exhibitions were then held at intervals until 1886. Other central Impressionism artists included Camille Pissarro and Berthe Morisot, with Edgar Degas and Edouard Manet.",
        year: "1874",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Impressionism"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,
    },

    {
        title: "Abstract",
        text: " art was born at the beginning of the 20th century. The artistic landscape was predominantly Fauvism, Cubism, and Figurative Expressionism. Its freedom of color shapes marks this type of art, and of course: it's subject. So much so that the visual aspect was completely abandoned purely for form little by little. Boldness and experimentation with color characterize this period as the artists began to free themselves from the constraints of academia. The beginnings of abstract art are hard to pinpoint. Many artists with varying styles appear simultaneously, bringing their personal touch to the definition of what constitutes 'abstract'. Some artists of this pure abstraction have preferred terms such as concrete art or non-objective art, but in practice, the word abstract is used across the board, and the distinction between the two is not always obvious. Abstract art is often seen as carrying a moral dimension in that it can be seen to stand for virtues such as order, purity, simplicity, and spirituality.",
        year: "1907",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Abstract"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,
    },
    {
        title: "Cubism",
        text: ` was a revolutionary new approach to representing reality invented around 1907 by Pablo Picasso and Georges Braque. They brought different views of subjects (usually objects or figures) together in the same picture, resulting in paintings that appear fragmented and abstracted. Cubism was one of the most influential styles of the twentieth century. It is generally agreed to have begun around 1907 with Picasso's celebrated painting Les Demoiselles d'Avignon which included elements of cubist style. Cubism opened up almost infinite new possibilities for the treatment of visual reality in art and was the starting point for many later abstract types, including constructivism and neo-plasticism. By breaking objects and figures down into distinct areas, the artists aimed to show different viewpoints simultaneously and within the same space and suggest their three-dimensional form. In doing so, they also emphasized the two-dimensional flatness of the canvas instead of creating the illusion of depth. Cubism marked a revolutionary break with the European tradition of creating the illusion of real space from a fixed viewpoint using devices such as linear perspective, which had dominated representation from the Renaissance onwards.`,
        year: "1907",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Cubism"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,

    },


    {
        title: "Surrealism",
        text: "  is a twentieth-century literary, philosophical and artistic movement that explored the workings of the mind, championing the irrational, the poetic, and the revolutionary. The movement aspiration towards the liberation of the mind and the release of artistic expressions have also meant seeking political freedom. In many instances, these artists have turned to political activism. Surrealism aims to revolutionize the human experience. It balances a rational vision of life with one that asserts the power of the unconscious and dreams. The movement artists find magic and strange beauty in the unexpected, the uncanny, the unseen, and the unconventional. Their work's core is the willingness to challenge imposed values and norms and a search for freedom.",
        year: "1917",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Surrealism"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,
    },
    {
        title: "Pop Art",
        text: " is a movement that emerged in the 1950s and flourished in the 1960s in America and Britain, drawing inspiration from sources in popular and commercial culture. It began as a revolt against the dominant approaches to art and culture and traditional views on what art should be. Young artists felt that what they learned at art school and what they saw in museums did not do with their lives or the things they saw around them every day. Instead, they turned to sources such as Hollywood movies, advertising, product packaging, pop music, and comic books for their imagery",
        year: "1950",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "Pop Art"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,
    },
    {
        title: "Contemporary Art",
        text: " is a term used to refer to the art of the present day and the relatively recent past, of an innovator or avant-garde nature. As such, it reflects the complex issues that shape our diverse, global, and rapidly changing world. Many contemporary artists explore personal or cultural identity through their work, offer critiques of social and institutional structures, or even attempt to redefine art itself. In the process, they often raise complex or thought-provoking questions without providing easy answers. Curiosity, an open mind, and a commitment to dialogue and debate are the best tools to approach a work of contemporary art.",
        year: "1970",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "contemporary"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,
    },
    {
        title: "21st Century Art",
        text: " emerges from a wide variety of materials and means. These include the latest electronic technologies, such as digital imaging and the internet. Many artists regularly and freely mix media and forms, making the choices that best serve their concepts and purposes. Activities vary from spectacular projects accomplished with huge budgets and extraordinary production values to modest endeavors that emphasize process, fleeting experiences, and a do-it-yourself approach. The notion of influences has also shifted with changes in communications and technology; every location around the world has artists who respond to local geographies and histories and the sway of global visual culture. 21st-century art is a burgeoning field of practice, research, and publication, making it an incredibly dynamic field of study.",
        year: "2000",
        artworksQuery:
        {
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "artwork_type_title": "Painting"
                            }
                        },
                        {
                            "match": {
                                "style_title": "21st Century"
                            }
                        },
                        {
                            "exists": {
                                "field": "id"
                            }
                        },
                        {
                            "exists": {
                                "field": "artist_title"
                            }
                        },
                        {
                            "exists": {
                                "field": "image_id"
                            }
                        },
                        {
                            "exists": {
                                "field": "place_of_origin"
                            }
                        },
                        {
                            "exists": {
                                "field": "title"
                            }
                        },
                        {
                            "exists": {
                                "field": "date_end"
                            }
                        },
                        {
                            "exists": {
                                "field": "medium_display"
                            }
                        },
                        {
                            "exists": {
                                "field": "dimensions"
                            }
                        },
                        {
                            "exists": {
                                "field": "style_title"
                            }
                        },
                    ]
                }
            }
        }
        ,
    },
];








