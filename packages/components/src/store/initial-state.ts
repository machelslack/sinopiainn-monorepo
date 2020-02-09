export default () => {
    return {
      hotel: {
        _id: {
          $oid: "5974d7d0734d1d6202a929a2"
        },
        businessname: "Sinopia Inn",
        businessaddress: "Sinopia Inn, Fairy Hill, Portland Parish, Jamaica",
        businessphone: "+1 876-993-7267",
        businesswebsite: "https://www.sinopiainn.com/",
        businessemail: "info@sinopiainn.com",
        businessdescription: "",
        country: "",
        coordinates: {
          Latitude: "18.1763329",
          Longitude: "-76.44973749999997"
        },
        nameofevent: "",
        timeofevent: "",
        dateofevent: "",
        activity: [
          {
            typeofbusiness: "Accomodation",
            typeofservice: "Villa"
          }
        ],
        typeofactivity: [],
        contactname: "",
        location: "",
        logourl: "",
        showcaseurl: [],
        comments: [],
        averagerating: "",
        avergaeprice: "",
        date: "",
        enabled: ""
      },
      rooms: [
        {
          _id: "1",
          name: "Guango",
          description:
            "Family sized bedroom with air conditioning and ensuite bathroom and lounge ",
          occupancy: "3",
          icon: "/images/parrot_thumb.png",
          price: "135.00",
          bookings: [],
          adults: "0",
          children: "0",
          infants: "0",
          photos: [
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo1.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo2.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo3.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo4.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo5.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo6.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Guango/photo7.jpg"
          ]
        },
        {
          _id: "2",
          name: "Pimento",
          description: "Double occupancy bedroom with ensuite bathroom",
          occupancy: "2",
          price: "125.00",
          icon: "/images/parrot_thumb.png",
          bookings: [],
          adults: "0",
          children: "0",
          infants: "0",
          photos: [
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Pimento/43f3ff66-98f6-4d67-9da4-45a2d510c26c.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Pimento/4dce5c86-8946-40e4-9a94-28fec486dfbd.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Pimento/4eba6a46-cebd-49bb-ab0e-a462b7cb9a61.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Pimento/b69f18f3-5d2c-4bdf-aba0-caf06a8e1740.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Pimento/d7589636-150b-4301-abf8-574bdb74b137.jpg"
          ]
        },
        {
          _id: "3",
          name: "Mahoe",
          description: "Double occupancy bedroom with ensuite bathroom",
          occupancy: "2",
          price: "125.00",
          icon: "/images/parrot_thumb.png",
          bookings: [],
          adults: "0",
          children: "0",
          infants: "0",
          photos: [
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Mahoe/888ba556-1d99-44d4-8784-21199555f0a4.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Mahoe/f4e8af82-b83f-4721-8e18-27195d581542.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Mahoe/888ba556-1d99-44d4-8784-21199555f0a4.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Mahoe/d8bac3b9-e6fa-443a-bec0-c51544dec834.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Mahoe/ec180a64-8d92-460d-b4f2-6a0f78e73db6.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Mahoe/f4e8af82-b83f-4721-8e18-27195d581542.jpg"
          ]
        },
        {
          _id: "4",
          name: "Cedar",
          description:
            "Air conditioned family sized bedroom with ensuite bathroom",
          occupancy: "3",
          price: "135.00",
          icon: "/images/parrot_thumb.png",
          bookings: [],
          adults: "0",
          children: "0",
          infants: "0",
          photos: [
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/0826808f-b319-4112-9530-dad795308108.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/0205c214-6099-4747-abf2-278760059c07.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/69d0782f-43b9-4462-a349-25983fa5d6e9.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/a17d6b92-a344-4824-9e70-4d9d568b656a.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/69d0782f-43b9-4462-a349-25983fa5d6e9.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/a17d6b92-a344-4824-9e70-4d9d568b656a.jpg",
            "https://s3-us-west-2.amazonaws.com/sinopia.rooms/Cedar/a39637db-80a5-4a63-bc56-a2b4862f0a91.jpg"
          ]
        }
      ],
      amenities: [
        {
          name: "Breakfast",
          description: "Traditional Jamaican breakfast",
          price: "10.00",
          frequency: "person",
          materialDesign: "free_breakfast"
        },
        {
          name: "Airport Pickup",
          description: "Transportation to and from airport",
          price: "30.00",
          frequency: "room",
          materialDesign: "airport_shuttle"
        }
      ],
      offers: [
        {
          _id: "1",
          name: "Summer & Autumn Discount 10%",
          description: "Validity period from 20th June to 14th December",
          amount: ".10",
          validdate: "2017-4-20",
          exdate: "2017-12-14",
          token: "",
          nights: "",
          photos: ["graphics/giftcard.png"]
        },
        {
          _id: "2",
          name: "Friends and family discount 15%",
          description: "All year",
          amount: ".15",
          validdate: "",
          exdate: "",
          token: "marshmellows",
          nights: "",
          photos: ["graphics/giftcard.png"]
        },
        {
          _id: "3",
          name: "Breakfast",
          description: "Complimentary Traditional Jamaican Breakfast - ",
          amount: "0",
          validdate: "",
          exdate: "",
          token: "",
          nights: 3,
          photos: ["graphics/giftcard.png"]
        }
      ],
      itinerary:{},
      reservationId:1,
      enquiry:{}
    };
  };
  