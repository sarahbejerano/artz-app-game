// asking for Renaissance artworks
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
                }
            ]
        }
    }
}
// https://api.artic.edu/api/v1/artworks/search?params=%7B%0A%20%20%20%20%22query%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22bool%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22must%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22match%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22artwork_type_title%22%3A%20%22Painting%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22match%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22style_title%22%3A%20%22Renaissance%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D&page=1



https://www.artic.edu/iiif/2/40fdb1d6-93fe-2916-78fb-f56a1ac261f1/full/843,/0/default.jpg
https://www.artic.edu/iiif/2/7b642fae-1cc9-ee08-0f4c-f8b2974c71c9/full/843,/0/default.jpg
https://www.artic.edu/iiif/2/5228201b-fa4a-e167-6c09-5ddaa27cffeb/full/843,/0/default.jpg
https://www.artic.edu/iiif/2/aa870b0d-5a1b-660a-6dc6-56c12109cf6e/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/8a0e4ac9-43ea-bc3e-884b-ee27f8a10501/full/843,/0/default.jpg
https://www.artic.edu/iiif/2/0f951635-312c-0829-451b-553f461c5518/full/400,/0/default.jpg


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
                }
            ]
        }
    }
}
https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/4eddcf49-3efd-d993-fb1a-75d7e7d5b5a1/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/a38e2828-ec6f-ece1-a30f-70243449197b/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/03930df3-1e6c-eeca-8660-c0b22ca477ff/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/0274aa9e-95d1-2a8e-12e3-2b09d7749b4f/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/3bbdacda-e7ca-1a5d-35e3-615c6bc3bd06/full/400,/0/default.jpg


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
                }
            ]
        }
    }
}

https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/52ac8996-3460-cf71-cb42-5c4d0aa29b74/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/defb4004-b500-218d-3d9b-9a02423f097d/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/d4ca6321-8656-3d3f-a362-2ee297b2b813/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/0f2d999d-0173-2935-a6d0-0175bb97b2a9/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/65db9e21-83c3-1cc6-7240-1e1996d87f52/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/ae6ac285-6887-dd76-4570-d379c786dfae/full/400,/0/default.jpg



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
                }
            ]
        }
    }
}
https://www.artic.edu/iiif/2/aebda29e-16b8-4393-6edc-805cdb6ba459/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/c617e2f0-d5fe-0772-390e-6d8c83895815/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/04e42e38-be5d-dacf-d627-17b2ca320cbe/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/872371ff-d773-f209-8062-7f88c95f2691/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/beed3af1-8c97-1c24-7c5a-a058f5cb5eba/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/8ac41eae-cddd-3f22-ba4e-c0e3f3f061e0/full/400,/0/default.jpg


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
                }
            ]
        }
    }
}
https://www.artic.edu/iiif/2/c0336616-0e02-20f7-ff4d-e86fd9578de6/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/afc24e4c-6367-50be-efc5-637e0dd123f9/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/ec39212c-5017-76cb-160e-b7065b4c47c9/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/d9bbaa6a-3c52-20d8-5b42-64dcb940fde8/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/4f3baaee-14ea-81e0-6252-447ab15a9b1d/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/1f6b23e1-fbe7-b604-f4bb-aadb2a763d48/full/400,/0/default.jpg


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
                }
            ]
        }
    }
}
https://www.artic.edu/iiif/2/be9551d4-860f-37a0-1408-086617f1824e/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/6a7160ea-df65-9083-c16c-33b30662208d/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/b59b290e-1ea6-dc37-4c86-1a16c948bfed/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/b846f704-96d3-3898-aece-13969147c48c/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/bd4991b1-dd2c-da63-d259-14d908e00644/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/b77d4b7b-abc7-f1ef-a8c2-377167820d63/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/bd327ce2-0971-2ba5-864e-8cb3761104a4/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/c73af721-157e-eb9e-2836-e2ca3c9d0a20/full/400,/0/default.jpg


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
                        "style_title": "Pop-art"
                    }
                }
            ]
        }
    }
}
https://www.artic.edu/iiif/2/f95a0a70-90c5-2806-2a66-68f27f8c0735/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/362c0c2a-4576-2207-4ba9-2b87e6d0bad0/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/249173c2-0013-4624-211c-3e8fcf335048/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/f8f58142-0be4-d504-b309-61ed72bc547c/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/9ea8d771-a5ff-dcd5-304e-d637d2be7e78/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/50d524d7-3eae-0ae6-72cc-d3b5ad170efd/full/400,/0/default.jpg


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
                        "style_title": "Contemporary"
                    }
                }
            ]
        }
    }
}
https://www.artic.edu/iiif/2/d94d0e3d-5d89-ce07-ee0f-7fa6d8def8ab/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/f9932dea-7999-ea96-fcab-965e027051c2/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/4d152c81-8389-e426-e5f2-e98902d2515a/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/a9293506-5891-def2-4cd1-fdfac004ca48/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/a5cf6e79-7bf2-72c9-7d77-0787311c45a9/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/6e72d851-0c15-978f-d0cf-0eadb94c0cf9/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/99956788-7a7d-2133-f2c0-7648593395cc/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/df1620f2-8309-d1aa-1914-50cb737b662f/full/400,/0/default.jpg