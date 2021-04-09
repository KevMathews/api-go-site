$(() => {

    const myData = {
        "source": {
        "id": "mashable",
        "name": "Mashable"
        },
        "author": "Proma Khosla",
        "title": "'WandaVision' wraps up with a straightforward finale — and classic MCU tease",
        "description": "WandaVision's ninth and final episode dropped on Friday, a surprisingly straightforward 49 minutes after one of the most sprawling and ambitious experiments in television history. \nThat's refreshing compared to the increasingly bloated run times of superhero …",
        "url": "https://mashable.com/article/wandavision-finale/",
        "urlToImage": "https://mondrian.mashable.com/2021%252F03%252F05%252F97%252F0c7cfdfb9f424b848077da3ef4f18557.be7f7.jpg%252F1200x630.jpg?signature=3E6G9wiOXor7slwRSaIuo_-9aZ4=",
        "publishedAt": "2021-03-05T19:19:37Z",
        "content": "WandaVision's ninth and final episode dropped on Friday, a surprisingly straightforward 49 minutes after one of the most sprawling and ambitious experiments in television history. \r\nThat's refreshing… [+6242 chars]"
        };

    const myData2 = {
    
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": "Noor Zainab Hussain, Carolyn Cohn",
        "title": "As Tesla takes the plunge, wary insurers watch crypto craze from the sidelines - Reuters UK",
        "description": "If Elon Musk's Tesla wanted to insure all of its recent $1.5 billion bitcoin investment against the myriad of pitfalls it could encounter, like hacks, theft and fraud, it would be out of luck.",
        "url": "https://www.reuters.com/article/us-crypto-currency-insurance-focus-idUSKBN2BO5IX",
        "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20210401&t=2&i=1557030921&r=LYNXMPEH302WP&w=800",
        "publishedAt": "2021-04-01T13:12:00Z",
        "content": "(Reuters) - If Elon Musks Tesla wanted to insure all of its recent $1.5 billion bitcoin investment against the myriad of pitfalls it could encounter, like hacks, theft and fraud, it would be out of l… [+5114 chars]"
        
    }

    const myData3 = {
        "source": {
        "id": "mashable",
        "name": "Mashable"
        },
        "author": "Mark Kaufman",
        "title": "See where NASA just zapped this odd Martian rock with a laser",
        "description": "On day 37 of its Martian mission (known as \"sol 37\"), the Perseverance rover zapped a curious, holey rock with a laser 10 times. \nIt wasn't for sport. The laser is part of the rover's SuperCam, which looms atop the car-sized robot like a crow's nest on a ship…",
        "url": "https://mashable.com/article/mars-perseverance-rover-zapped-rock-laser/",
        "urlToImage": "https://mondrian.mashable.com/2021%252F04%252F03%252F4d%252F74b261f103fb446296caeecce8d727e3.b28e9.png%252F1200x630.png?signature=ui7NYiefofM6K-n0F4jtLi33Q5g=",
        "publishedAt": "2021-04-03T17:17:31Z",
        "content": "On day 37 of its Martian mission (known as \"sol 37\"), the Perseverance rover zapped a curious, holey rock with a laser 10 times. \r\nIt wasn't for sport. The laser is part of the rover's SuperCam, whic… [+2556 chars]"
        }
    
    let textedJson = JSON.stringify(myData, undefined, 6);
    $('#myTextarea').text(textedJson);

    let textedJson2 = JSON.stringify(myData2, undefined, 6);
    $('#myTextarea2').text(textedJson2);

    let textedJson3 = JSON.stringify(myData3, undefined, 6);
    $('#myTextarea3').text(textedJson3);



});