import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import SearchBar from './SearchBar';
import AdsList from './AdsList';
import React, { useState } from "react";

const cards = [

    {
        id: 0,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: '12.06.2003',
        price: 250,
        status: true,
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                href: '#'
            }
        ]
    },
    {
        id: 1,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 251,
        status: false,
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                href: '#'
            }
        ]
    },
    {
        id: 2,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 252,
        status: false
    },
    {
        id: 3,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 253,
        status: false
    },
    {
        id: 4,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 254,
        status: false
    },
    {
        id: 5,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 255,
        status: false
    },
    {
        id: 6,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 256,
        status: false
    },
    {
        id: 7,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 257,
        status: false
    },
    {
        id: 8,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 258,
        status: false
    },
    {
        id: 9,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 259,
        status: false
    },
    {
        id: 10,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 260,
        status: false
    },
    {
        id: 11,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 261,
        status: false
    },
    {
        id: 12,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 262,
        status: false
    },
    {
        id: 13,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 263,
        status: false
    },
    {
        id: 14,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 264,
        status: false
    },
    {
        id: 15,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 265,
        status: false,
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#'
            },
            {
                name: 'Mark it expire',
                href: '#',
                icon: 'XCircle',
            },
            {
                name: 'Delete Ads',
                href: '#',
            }
        ]
    },
    {
        id: 16,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 266,
        status: false
    },
    {
        id: 17,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 267,
        status: false
    },
    {
        id: 18,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 268,
        status: false
    },
    {
        id: 19,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 269,
        status: false
    },
    {
        id: 20,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 270,
        status: false
    },
    {
        id: 21,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 271,
        status: false
    },
    {
        id: 22,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 272,
        status: false
    },
    {
        id: 23,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 273,
        status: false
    },
    {
        id: 24,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 274,
        status: false
    },
    {
        id: 25,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 275,
        status: false
    },
    {
        id: 26,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 276,
        status: false
    },
    {
        id: 27,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 277,
        status: false
    },
    {
        id: 28,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 278,
        status: false
    },
    {
        id: 29,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 279,
        status: false
    },
    {
        id: 30,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 280,
        status: false
    }


]

function MyAds() {

    const [profileData, setprofileData] = useState([
        {
            name: "Brian Kernighan",
            email: "brian@test.com",
            password: "password1",
            skills: ["AWK", "AMPL", "Unix"]
        },
        {
            name: "Max Kanat-Alexander",
            email: "max@test.com",
            password: "password1",
            skills: ["Java", "Perl", "Apache", "Python"]
        },
        {
            name: "Spruce Emmanuel",
            email: "new@test.com",
            password: "password1",
            skills: ["JavaScript", "Perl", "Apache", "Node.js"]
        }
    ]);
    const [q, setQ] = useState("");
    const [searchTerm] = useState(["email", "name"]);

    function search(items) {
        return items.filter((item) => {
            return searchTerm.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    /*
        return (
            <main>
                <div>
                    <h2>Profiles</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="search..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
    
                    {search(profileData).map((val, key) => {
                        return (
                            <div className="box" key={key}>
                                <p>{val.name}</p>
                                <p>{val.email}</p>
                                {val.skills.map((skill) => {
                                    return <p>{skill}</p>;
                                })}
                            </div>
                        );
                    })}
                </div>
            </main>
        );
        */

    return (
        <div className="container m-2 ">
            <SearchBar props={{q, setQ}} />
            <AdsList cards={{profileData, search}} />
        </div>
    )
}

export default MyAds