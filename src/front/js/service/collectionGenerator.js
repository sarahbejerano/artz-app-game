

export const ArtPeriods = [
    {
        title: "Renaissance",
        text: " is a french word meaning rebirth, now used in English to describe the great revival of art that took place in Italy from about 1400 under the influence of the rediscovery of classical art and culture. The Renaissance reached its peak (known as the High Renaissance) in the short period from about 1500 to 1530 in the work of Michelangelo, Leonardo DaVinci and Raphael.The work of Raphael may be seen as representing the purest form of the Renaissance style and he was held up as prime model in the art academies until the mid-nineteenth century when artists turned their back on this classically governed approach. The revolt can be seen in movements such as the Pre-Raphaelites (who drew inspiration from the medieval art), realism, naturalism and impressionism.",
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
        title: "Impressionism",
        text: " developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously on the spot rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life. Impressionism was developed by Claude Monet and other Paris-based artists from the early 1860s. (Though the process of painting on the spot can be said to have been pioneered in Britain by John Constable in around 1813 to 1817 through his desire to paint nature in a realistic way).Instead of painting in a studio, the impressionists found that they could capture the momentary and transient effects of sunlight by working quickly, in front of their subjects, in the open air (en plein air) rather than in a studio. This resulted in a greater awareness of light and colour and the shifting pattern of the natural scene. Brushwork became rapid and broken into separate dabs in order to render the fleeting quality of light. The first group exhibition was in Paris in 1874 and included work by Monet, Auguste Renoir, Edgar Degas and Paul Cezanne.The work shown was greeted with derision with Monet Impression, Sunrise particularly singled out for ridicule and giving its name(used by critics as an insult) to the movement.Seven further exhibitions were then held at intervals until 1886. Other core artists of impressionism were Camille Pissarro and Berthe Morisot with Edgar Degas and Edouard Manet also often associated with the movement.",
        year: "1860",
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
        title: "Post-impressionism",
        text: " is a term which describes the changes in impressionism from about 1886, the date of last Impressionist group show in Paris.The term is usually confined to the four major figures who developed and extended impressionism in distinctly different directions: Paul Cezanne, Paul Gauguin, Georges Seurat and Vincent van Gogh. Cézanne retained the fundamental doctrine of painting from nature but with added rigour, famously saying I want to re-do Poussin from nature. (Poussin being a notoriously intellectual pioneer of French landscape).Seurat put impressionist painting of light and colour on a scientific basis(neo- Impressionism, divisionism).Gauguin retained intense light and colour but rejected painting from nature and reintroduced imaginative subject matter.Van Gogh painted from nature but developed highly personal use of colour and brushwork directly expressing emotional response to subject and his inner world. Post - impressionism as a term was first used by British artist and art critic Roger Fry in 1910 when he organized the 1910 exhibition Manet and the Post - Impressionists.",
        year: "1886",
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
                                "style_title": "Post-Impressionism"
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
        text: " art is art that does not attempt to represent an accurate depiction of a visual reality but instead use shapes, colours, forms and gestural marks to achieve its effect. Strictly speaking, the word abstract means to separate or withdraw something from something else. The term can be applied to art that is based an object, figure or landscape, where forms have been simplified or schematised. It is also applied to art that uses forms, such as geometric shapes or gestural marks, which have no source at all in an external visual reality.Some artists of this pure abstraction have preferred terms such as concrete art or non- objective art, but in practice the word abstract is used across the board and the distinction between the two is not always obvious. Abstract art is often seen as carrying a moral dimension, in that it can be seen to stand for virtues such as order, purity, simplicity and spirituality.",
        year: "1900",
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
        text: " was a revolutionary new approach to representing reality invented in around 1907 by artists Pablo Picasso and Georges Braque. They brought different views of subjects (usually objects or figures) together in the same picture, resulting in paintings that appear fragmented and abstracted. Cubism was one of the most influential styles of the twentieth century. It is generally agreed to have begun around 1907 with Picasso celebrated painting Demoiselles DAvignon which included elements of cubist style.  Cubism opened up almost infinite new possibilities for the treatment of visual reality in art and was the starting point for many later abstract styles including constructivism and neo- plasticism.By breaking objects and figures down into distinct areas the artists aimed to show different viewpoints at the same time and within the same space and so suggest their three dimensional form.In doing so they also emphasized the two- dimensional flatness of the canvas instead of creating the illusion of depth.This marked a revolutionary break with the European tradition of creating the illusion of real space from a fixed viewpoint using devices such as linear perspective, which had dominated representation from the Renaissance onwards.Cubism was partly influenced by the late work of artist Paul Cézanne in which he can be seen to be painting things from slightly different points of view.",
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
        text: " is a  twentieth-century literary, philosophical and artistic movement that explored the workings of the mind, championing the irrational, the poetic and the revolutionary.The movement aspiration towards the liberation of the mind as well as the liberation of artistic expressions has also meant seeking political freedom. In many instances, these artists have turned to political activism. In this way, the revolutionary concepts encouraged by Surrealism has led the movement to be seen as a way of life.Surrealism aims to revolutionise human experience. It balances a rational vision of life with one that asserts the power of the unconscious and dreams. The movement artists find magic and strange beauty in the unexpected and the uncanny, the disregarded and the unconventional. At the core of their work is the willingness to challenge imposed values and norms, and a search for freedom.",
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

];








