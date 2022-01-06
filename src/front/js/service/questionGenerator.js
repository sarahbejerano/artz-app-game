const randomNumber = (limit) => Math.floor(Math.random() * limit);
const imageUrl = "https://www.artic.edu/iiif/2/";
const imageParams = "/full/843,/0/default.jpg";
const elasticSearchParams =
{
    "query": {
        "bool": {
            "must": [
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
                        "field": "style_title"
                    }
                },
            ]
        }
    }
};
const encodedSearchParams = encodeURIComponent(JSON.stringify(elasticSearchParams));

const getData = (uniqueProp) => {
    return fetch("https://api.artic.edu/api/v1/artworks/search?limit=100&fields=artist_title,id,title,image_id,style_title,date_end&params=" + encodedSearchParams)
        .then(resp => resp.json())
        .then(data => {
            const answers = [data.data[randomNumber(data.data.length)]];
            while (answers.length < 3) {
                const possibleAnswer = data.data[randomNumber(data.data.length)];
                let validAnswer = true;
                for (let i = 0; i < answers.length; i++) {
                    if (possibleAnswer.id === answers[i].id || possibleAnswer[uniqueProp] === answers[i][uniqueProp]) {
                        validAnswer = false;
                    }
                }
                if (validAnswer) {
                    answers.push(possibleAnswer);
                }
            }

            return answers;
        })
};

export const getAuthorQuestion = (setStore) => {
    getData('artist_title')
        .then(answers => {
            const correctAnswer = answers[randomNumber(answers.length)];
            setStore({
                question: {
                    answers: answers.map(answer => {
                        return {
                            objectID: answer.id, title: answer.artist_title,
                        }
                    }),
                    correctAnswer: {
                        objectID: correctAnswer.id, title: correctAnswer.artist_title,
                        image: imageUrl + correctAnswer.image_id + imageParams,
                    },
                    questionPrompt: "Who is the author?"
                }
            });

        })
        .catch(error => console.log("Error loading message from backend", error))
};

export const getPeriodQuestion = (setStore) => {
    getData('date_end')
        .then(answers => {
            const correctAnswer = answers[randomNumber(answers.length)];
            setStore({
                question: {
                    answers: answers.map(answer => {
                        return {
                            objectID: answer.id, title: answer.date_end,
                        }
                    }),
                    correctAnswer: {
                        objectID: correctAnswer.id,
                        image: imageUrl + correctAnswer.image_id + imageParams,
                        title: correctAnswer.date_end,
                    },
                    questionPrompt: "What is the period?"
                }
            });

        })
        .catch(error => console.log("Error loading message from backend", error))
};
export const getTitleQuestion = (setStore) => {
    getData('title')
        .then(answers => {
            const correctAnswer = answers[randomNumber(answers.length)];
            setStore({
                question: {
                    answers: answers.map(answer => {
                        return {
                            objectID: answer.id, title: answer.title,
                        }
                    }),
                    correctAnswer: {
                        objectID: correctAnswer.id,
                        image: imageUrl + correctAnswer.image_id + imageParams,
                        title: correctAnswer.title,
                    },
                    questionPrompt: "Which is the title?"
                }
            });

        })
        .catch(error => console.log("Error loading message from backend", error))
};
export const getArtMovementQuestion = (setStore) => {
    getData('style_title')
        .then(answers => {
            const correctAnswer = answers[randomNumber(answers.length)];
            setStore({
                question: {
                    answers: answers.map(answer => {
                        return {
                            objectID: answer.id, title: answer.style_title,
                        }
                    }),
                    correctAnswer: {
                        objectID: correctAnswer.id,
                        image: imageUrl + correctAnswer.image_id + imageParams,
                        title: correctAnswer.style_title,
                    },
                    questionPrompt: "Artistic Movement?"
                }
            });

        })
        .catch(error => console.log("Error loading message from backend", error))
};


