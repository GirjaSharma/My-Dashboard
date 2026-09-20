export const bookings = [
    {
        id: "#BK-001",
        customerName: "Rajassen",
        eventDate: "2026-05-03",
        items: [
            {
                itemName: "Tables",
                quantity : 5,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-01",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-02",
        itemsBackDate: "2026-05-03",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "12:00 PM",
        bookingStatus: "confirmed"

    },
    {
        id: "#BK-002",
        customerName: "Nedaa",
        eventDate: "2026-05-17",
        items: [
            {
                itemName: "Tables",
                quantity : 5,
                unitPrice: 10,
            },
            {
                itemName: "Chairs",
                quantity : 25,
                unitPrice: 2,
            },
            {
                itemName: "Table cloth",
                quantity : 5,
                unitPrice: 8,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-04-26",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-16",
        itemsBackDate: "2026-05-17",
         itemsOutAt: "3:00 PM",
        itemsBackAt: "10:30 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-003",
        customerName: "Rasha",
        eventDate: "2026-05-16",
        items: [
            {
                itemName: "Tables",
                quantity : 2,
                unitPrice: 10,
            },
            {
                itemName: "Chairs",
                quantity : 13,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-05-14",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-16",
        itemsBackDate: "2026-05-17",
         itemsOutAt: "10:30 AM",
        itemsBackAt: "10:30 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-004",
        customerName: "Bonnie",
        eventDate: "2026-05-24",
        items: [
            {
                itemName: "Table Cloth",
                quantity : 12,
                unitPrice: 8,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-05-16",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-23",
        itemsBackDate: "2026-05-24",
         itemsOutAt: "6:00 PM",
        itemsBackAt: "7:00 PM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-005",
        customerName: "Burn Ben",
        eventDate: "2026-05-24",
        items: [
            {
                itemName: "Chairs",
                quantity : 18,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-12",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-24",
        itemsBackDate: "2026-05-24",
        itemsOutAt: "9:00 AM",
        itemsBackAt: "8:00 PM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-006",
        customerName: "Zahrah",
        eventDate: "2026-05-27",
        items: [
            {
                itemName: "Chairs",
                quantity : 14,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-14",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-27",
        itemsBackDate: "2026-05-28",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-007",
        customerName: "Ruhi",
        eventDate: "2026-06-06",
        items: [
             {
                itemName: "Tables",
                quantity : 4,
                unitPrice: 10,
            },
            {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            },
            {
                itemName: "Table cloth",
                quantity : 4,
                unitPrice: 8,
            }

        ],
        charges:{
            deliveryFee: 30,
            setupFee:0,
            discount:2,
            tax: 0
        },
        createdAt: "2026-05-08",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-06-05",
        itemsBackDate: "2026-06-06",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "7:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-008",
        customerName: "Mahd",
        eventDate: "2026-06-07",
        items: [
            {
                itemName: "Chairs",
                quantity : 30,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 5,
                unitPrice: 10,
            },

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-10",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-06",
        itemsBackDate: "2026-06-07",
        itemsOutAt: "7:30 PM",
        itemsBackAt: "7:30 PM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-009",
        customerName: "Fatima",
        eventDate: "2026-05-30",
        items: [
            {
                itemName: "Chairs",
                quantity : 25,
                unitPrice: 2,
            },

        ],
        charges:{
            deliveryFee: 30,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-20",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-05-30",
        itemsBackDate: "2026-05-31",
        itemsOutAt: "9:30 AM",
        itemsBackAt: "9:30 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-010",
        customerName: "Areej",
        eventDate: "2026-06-01",
        items: [
            {
                itemName: "Chairs",
                quantity : 15,
                unitPrice: 2,
            },

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-01",
        itemsBackDate: "2026-06-02",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-011",
        customerName: "Areej",
        eventDate: "2026-06-07",
        items: [
            {
                itemName: "Chairs",
                quantity : 15,
                unitPrice: 2,
            },

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-07",
        itemsBackDate: "2026-06-08",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-012",
        customerName: "Brittany",
        eventDate: "2026-06-06",
        items: [
            {
                itemName: "kids chairs",
                quantity : 8,
                unitPrice: 3,
            },
            {
                itemName: "kids table",
                quantity : 1,
                unitPrice: 10,
            },
            {
                itemName: "chairs",
                quantity : 12,
                unitPrice: 2,
            },
            {
                itemName: "table",
                quantity : 3,
                unitPrice: 10,
            },

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:3,
            tax: 0
        },
        createdAt: "2026-05-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-06",
        itemsBackDate: "2026-06-07",
        itemsOutAt: "1:00 PM",
        itemsBackAt: "1:00 PM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-013",
        customerName: "Brandon",
        eventDate: "2026-06-12",
        items: [
            {
                itemName: "Chairs",
                quantity : 33,
                unitPrice: 2,
            },

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-12",
        itemsBackDate: "2026-06-13",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-014",
        customerName: "Jiveria",
        eventDate: "2026-05-27",
        items: [
            {
                itemName: "Chairs",
                quantity : 12,
                unitPrice: 2,
            },
             {
                itemName: "tables",
                quantity : 2,
                unitPrice: 10,
            }, 

        ],
        charges:{
            deliveryFee: 20,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-26",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-05-26",
        itemsBackDate: "2026-05-27",
        itemsOutAt: "6:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-015",
        customerName: "Aneela",
        eventDate: "2026-05-27",
        items: [
            {
                itemName: "Chairs",
                quantity : 10,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-26",
        itemsBackDate: "2026-05-28",
        itemsOutAt: "12:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-016",
        customerName: "Rochelle",
        eventDate: "2026-06-05",
        items: [
            {
                itemName: "Chairs",
                quantity : 14,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-05",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-05",
        itemsBackDate: "2026-06-06",
        itemsOutAt: "12:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
      {
        id: "#BK-017",
        customerName: "Arslan",
        eventDate: "2026-05-24",
        items: [
            {
                itemName: "Chairs",
                quantity : 10,
                unitPrice: 2,
            },
             {
                itemName: "Table",
                quantity : 1,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-24",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-24",
        itemsBackDate: "2026-05-25",
        itemsOutAt: "12:00 PM",
        itemsBackAt: "4:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-018",
        customerName: "Mike",
        eventDate: "2026-05-24",
        items: [
            {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-24",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-24",
        itemsBackDate: "2026-05-25",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-019",
        customerName: "Zulal",
        eventDate: "2026-06-21",
        items: [
           {
                itemName: "Tables",
                quantity : 10,
                unitPrice: 10,
            },
            {
                itemName: "Chairs",
                quantity : 50,
                unitPrice: 2,
            },
            {
                itemName: "Table cloth",
                quantity : 10,
                unitPrice: 8,
            }

        ],
        charges:{
            deliveryFee: 50,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-24",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-19",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-020",
        customerName: "Natasha",
        eventDate: "2026-07-18",
        items: [
            {
                itemName: "Chairs",
                quantity : 30,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-16",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-18",
        itemsBackDate: "2026-07-19",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "cancelled"

    },
     {
        id: "#BK-021",
        customerName: "Esther",
        eventDate: "2026-05-26",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 9,
                unitPrice: 3,
            },
             {
                itemName: "Kids Tables",
                quantity : 1,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-24",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-26",
        itemsBackDate: "2026-05-27",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-022",
        customerName: "Gina",
        eventDate: "2026-05-31",
        items: [
            {
                itemName: "Chairs",
                quantity : 22,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 3,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:4,
            tax: 0
        },
        createdAt: "2026-05-26",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-30",
        itemsBackDate: "2026-06-01",
        itemsOutAt: "8:00 pM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-023",
        customerName: "Lisa",
        eventDate: "2026-06-28",
        items: [
            {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 8,
                unitPrice: 10,
            },
             {
                itemName: "Table Cloth",
                quantity : 8,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 50,
            setupFee:0,
            discount:4,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-30",
        itemsBackDate: "2026-06-01",
        itemsOutAt: "8:00 pM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    }, {
        id: "#BK-024",
        customerName: "Marjan",
        eventDate: "2026-07-04",
        items: [
            {
                itemName: "Chairs",
                quantity : 25,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:4,
            tax: 0
        },
        createdAt: "2026-06-10",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-03",
        itemsBackDate: "2026-07-05",
        itemsOutAt: "7:00 pM",
        itemsBackAt: "11:00 AM",
        bookingStatus: "cancelled"

    },
    {
        id: "#BK-025",
        customerName: "Mahesh",
        eventDate: "2026-05-30",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 8,
                unitPrice: 3,
            },
            {
                itemName: "Chairs",
                quantity : 1,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:4,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-29",
        itemsBackDate: "2026-05-31",
        itemsOutAt: "7:00 pM",
        itemsBackAt: "11:00 AM",
        bookingStatus: "confirmed"

    },
      {
        id: "#BK-026",
        customerName: "Thenuga",
        eventDate: "2026-05-30",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 12,
                unitPrice: 3,
            },
            {
                itemName: "Chairs",
                quantity : 2,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:4,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-29",
        itemsBackDate: "2026-05-30",
        itemsOutAt: "7:00 pM",
        itemsBackAt: "7:00 PM",
        bookingStatus: "confirmed"

    },
      {
        id: "#BK-027",
        customerName: "Zahrah",
        eventDate: "2026-05-30",
        items: [
            {
                itemName: "Chairs",
                quantity : 10,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-24",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-30",
        itemsBackDate: "2026-05-31",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-028",
        customerName: "Satyam",
        eventDate: "2026-05-29",
        items: [
            {
                itemName: "Chairs",
                quantity : 6,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-29",
        itemsBackDate: "2026-05-30",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-029",
        customerName: "Sarah",
        eventDate: "2026-05-31",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 20,
                unitPrice: 3,
            },
            {
                itemName: "Kids Tables",
                quantity : 4,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:10,
            tax: 0
        },
        createdAt: "2026-05-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-05-31",
        itemsBackDate: "2026-06-01",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-030",
        customerName: "Mirha",
        eventDate: "2026-06-28",
        items: [
            {
                itemName: "Chairs",
                quantity : 21,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-28",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "6:00 PM",
        itemsBackAt: "7:00 PM",
         bookingStatus: "confirmed"

    },
      {
        id: "#BK-031",
        customerName: "Priscilla",
        eventDate: "2026-06-22",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 8,
                unitPrice: 3,
            },
            {
                itemName: "Kids Tables",
                quantity : 1,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-21",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "6:00 PM",
        itemsBackAt: "6:00 PM",
         bookingStatus: "cancelled"

    },
      {
        id: "#BK-032",
        customerName: "Treyvon",
        eventDate: "2026-07-04",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 12,
                unitPrice: 3,
            },
            {
                itemName: "Kids Tables",
                quantity : 1,
                unitPrice: 10,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-05-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-04",
        itemsBackDate: "2026-07-05",
        itemsOutAt: "12:00 PM",
        itemsBackAt: "12:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-033",
        customerName: "Midhat",
        eventDate: "2026-06-13",
        items: [
            {
                itemName: "Chairs",
                quantity : 35,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 6,
                unitPrice: 10,
            }, 
            {
                itemName: "Tables Cloth",
                quantity : 6,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 50,
            setupFee:0,
            discount:30,
            tax: 0
        },
        createdAt: "2026-05-31",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-06-12",
        itemsBackDate: "2026-06-14",
        itemsOutAt: "6:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-034",
        customerName: "Areeba",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Folding Chairs",
                quantity : 35,
                unitPrice: 1.5,
            },
             {
                itemName: "Tables",
                quantity : 5,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 50,
            setupFee:0,
            discount:2.5,
            tax: 0
        },
        createdAt: "2026-06-01",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-035",
        customerName: "Samira",
        eventDate: "2026-06-14",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 24,
                unitPrice: 3,
            },
             {
                itemName: "kids Tables",
                quantity : 3,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:2,
            tax: 0
        },
         createdAt: "2026-06-03",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-13",
        itemsBackDate: "2026-06-15",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-036",
        customerName: "Chelsea",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 8,
                unitPrice: 3,
            },
             {
                itemName: "kids Tables",
                quantity : 3,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-03",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "9:00 AM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-037",
        customerName: "Anne Julia",
        eventDate: "2026-06-20",
        items: [
            {
                itemName: "Chairs",
                quantity : 14,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 3,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:2,
            tax: 0
        },
         createdAt: "2026-06-03",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-19",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-038",
        customerName: "Shaveta",
        eventDate: "2026-06-30",
        items: [
            {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 6,
                unitPrice: 10,
            }, 
             {
                itemName: "Table Cloth",
                quantity : 6,
                unitPrice: 10,
            }, 
             {
                itemName: "Table Runners",
                quantity : 6,
                unitPrice: 3,
            }, 


        ],
        charges:{
            deliveryFee: 80,
            setupFee:0,
            discount:20,
            tax: 0
        },
         createdAt: "2026-06-03",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-06-30",
        itemsBackDate: "2026-07-01",
        itemsOutAt: "5:00 PM",
        itemsBackAt: "6:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-039",
        customerName: "Mekala",
        eventDate: "2026-07-05",
        items: [
            {
                itemName: "Chairs",
                quantity : 30,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 2,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-14",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-05",
        itemsBackDate: "2026-07-06",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "7:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-040",
        customerName: "Jessica",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 16,
                unitPrice: 3,
            },
             {
                itemName: "kids Tables",
                quantity : 2,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-05",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-05",
        itemsBackDate: "2026-07-06",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-041",
        customerName: "Samia Mirza",
        eventDate: "2026-06-07",
        items: [
            {
                itemName: "Chairs",
                quantity : 8,
                unitPrice: 2,
            },
              {
                itemName: "Folding Chairs",
                quantity : 8,
                unitPrice: 1.5,
            },
             {
                itemName: "Tables",
                quantity : 2,
                unitPrice: 10,
            }, 


        ],
        charges:{
            deliveryFee: 40,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-05",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-06-07",
        itemsBackDate: "2026-06-08",
        itemsOutAt: "1:00 PM",
        itemsBackAt: "1:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-042",
        customerName: "Danuta",
        eventDate: "2026-07-11",
        items: [
            {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            },
             {
                itemName: "Cocktail Tables",
                quantity : 3,
                unitPrice: 15,
            }, 
            {
                itemName: "Cocktail Tables Cloth",
                quantity : 3,
                unitPrice: 5,
            }, 


        ],
        charges:{
            deliveryFee: 50,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-05",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-10",
        itemsBackDate: "2026-07-12",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-043",
        customerName: "Coretta",
        eventDate: "2026-07-05",
        items: [
            {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            },
             {
                itemName: "Tables",
                quantity : 6,
                unitPrice: 10,
            }, 
             {
                itemName: "Table Cloth",
                quantity : 6,
                unitPrice: 10,
            }, 
             {
                itemName: "Table Runners",
                quantity : 6,
                unitPrice: 3,
            }, 


        ],
        charges:{
            deliveryFee: 70,
            setupFee:0,
            discount:20,
            tax: 0
        },
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-05",
        itemsBackDate: "2026-07-06",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "cancelled"

    },
    {
        id: "#BK-044",
        customerName: "Sarabjeet",
        eventDate: "2026-06-13",
        items: [
            {
                itemName: "Chairs",
                quantity : 25,
                unitPrice: 2,
            }

        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-08",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-13",
        itemsBackDate: "2026-06-14",
        itemsOutAt: "10:00 AM",
        itemsBackAt: "3:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-045",
        customerName: "Susan",
        eventDate: "2026-07-14",
        items: [
            {
                itemName: "Chairs",
                quantity : 14,
                unitPrice: 2,
            },
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-09",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-14",
        itemsBackDate: "2026-07-16",
        itemsOutAt: "7:00 PM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-046",
        customerName: "Meli",
        eventDate: "2026-07-12",
        items: [
            {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            },
            {
                itemName: "Tables",
                quantity : 3,
                unitPrice: 10,
            },
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-11",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-12",
        itemsBackDate: "2026-07-13",
        itemsOutAt: "11:00 AM",
        itemsBackAt: "11:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-047",
        customerName: "Sruthi",
        eventDate: "2026-06-15",
        items: [
            {
                itemName: "Chairs",
                quantity : 10,
                unitPrice: 2,
            },
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-15",
        itemsBackDate: "2026-06-16",
        itemsOutAt: "5:00 PM",
        itemsBackAt: "7:00 PM",
         bookingStatus: "cancelled"

    },
    {
        id: "#BK-048",
        customerName: "Charlene",
        eventDate: "2026-06-13",
        items: [
            {
                itemName: "Folding Chairs",
                quantity : 8,
                unitPrice: 1.5,
            },
            {
                itemName: "Tables",
                quantity : 1,
                unitPrice: 10,
            },
            {
                itemName: "Kids Table",
                quantity : 1,
                unitPrice: 10,
            },
             {
                itemName: "Table Cloth",
                quantity : 1,
                unitPrice: 10,
            },
             

            
        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-12",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-13",
        itemsBackDate: "2026-06-14",
        itemsOutAt: "10:30 AM",
        itemsBackAt: "10:30 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-049",
        customerName: "Sanjeev",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Folding Chairs",
                quantity : 15,
                unitPrice: 1.5,
            },
            {
                itemName: "Cocktail Tables",
                quantity : 3,
                unitPrice: 15,
            },
            {
                itemName: "Cocktail Covers",
                quantity : 3,
                unitPrice: 5,
            },
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-16",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "11:30 AM",
        itemsBackAt: "12:30 PM",
         bookingStatus: "confirmed"

    },
 
    
     {
        id: "#BK-050",
        customerName: "Tara",
        eventDate: "2026-06-20",
        items: [
            {
                itemName: "Folding Chairs",
                quantity : 20,
                unitPrice: 1.5,
            }
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
         createdAt: "2026-06-18",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-19",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "7:30 PM",
        itemsBackAt: "02:30 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-051",
        customerName: "Sarah",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: " Chairs",
                quantity : 20,
                unitPrice: 2,
            }
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-16",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "09:00 AM",
        itemsBackAt: "10:30 AM",
         bookingStatus: "cancelled"

    },
    {
        id: "#BK-052",
        customerName: "Charlene",
        eventDate: "2026-06-20",
        items: [
            {
                itemName: "Folding Chairs",
                quantity : 15,
                unitPrice: 1.5,
            },
            {
                itemName: "Kids Chairs",
                quantity : 18,
                unitPrice: 3,
            },
            {
                itemName: "Kids Table",
                quantity : 4,
                unitPrice: 10,
            }
             


        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:10,
            tax: 0
        },
         createdAt: "2026-06-16",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-19",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "7:30 PM",
        itemsBackAt: "2:30 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-053",
        customerName: "Natalie",
        eventDate: "2026-06-28",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 14,
                unitPrice: 3,
            },
            {
                itemName: "Kids Tables",
                quantity : 2,
                unitPrice: 10,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "09:00 AM",
        itemsBackAt: "10:30 AM",
         bookingStatus: "cancelled"

    },
       {
        id: "#BK-054",
        customerName: "Tanya",
        eventDate: "2026-06-19",
        items: [
            {
                itemName: "Chairs",
                quantity : 4,
                unitPrice: 2,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-17",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-19",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "04:00 PM",
        itemsBackAt: "4:30 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-055",
        customerName: "Urooba",
        eventDate: "2026-06-19",
        items: [
            {
                itemName: "Metal Chairs",
                quantity : 10,
                unitPrice: 1.5,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-18",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-19",
        itemsBackDate: "2026-06-22",
        itemsOutAt: "047:00 PM",
        itemsBackAt: "7:30 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-056",
        customerName: "Alex",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "09:00 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "cancelled"

    },
    {
        id: "#BK-057",
        customerName: "Shrussan",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 6,
                unitPrice: 3,
            },
             {
                itemName: "Kids Tables",
                quantity : 1,
                unitPrice: 10,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-21",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-29",
        itemsOutAt: "12:00 PM",
        itemsBackAt: "2:30 PM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-058",
        customerName: "Nageen",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 14,
                unitPrice: 3,
            },
             {
                itemName: "Kids Tables",
                quantity : 3,
                unitPrice: 10,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-24",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-24",
        itemsBackDate: "2026-06-25",
        itemsOutAt: "9:00 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-059",
        customerName: "Pamela",
        eventDate: "2026-06-27",
        items: [
            {
                itemName: "Tables",
                quantity : 2,
                unitPrice: 10,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-27",
        itemsBackDate: "2026-06-28",
        itemsOutAt: "9:00 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-060",
        customerName: "Aysha Ovais",
        eventDate: "2026-06-28",
        items: [
            {
                itemName: "Kids Tables",
                quantity : 1,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 16,
                unitPrice: 2,
            },
             {
                itemName: "Table Cloth",
                quantity : 1,
                unitPrice: 10,
            },
            ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-28",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-06-28",
        itemsBackDate: "2026-06-29",
        itemsOutAt: "10:30 AM",
        itemsBackAt: "5:00 PM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-061",
        customerName: "Mazen",
        eventDate: "2026-07-12",
        items: [
            {
                itemName: "Tables",
                quantity : 4,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            }
            ],
        charges:{
            deliveryFee: 40,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-18",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-12",
        itemsBackDate: "2026-07-12",
        itemsOutAt: "10:30 AM",
        itemsBackAt: "5:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-062",
        customerName: "Slay Queen",
        eventDate: "2026-07-24",
        items: [
            {
                itemName: "Tables",
                quantity : 7,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            }
            ],
        charges:{
            deliveryFee: 30,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-18",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-25",
        itemsBackDate: "2026-07-26",
        itemsOutAt: "9:30 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-063",
        customerName: "Gunjan",
        eventDate: "2026-07-03",
        items: [
            {
                itemName: "Tables",
                quantity : 4,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 40,
                unitPrice: 2,
            }
            ,
             {
                itemName: "Regular Table Cloth",
                quantity : 4,
                unitPrice: 5,
            }
            ],
        charges:{
            deliveryFee: 60,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-20",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-03",
        itemsBackDate: "2026-07-04",
        itemsOutAt: "9:30 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
     {
        id: "#BK-064",
        customerName: "Vijeta",
        eventDate: "2026-07-11",
        items: [
            {
                itemName: "Tables",
                quantity : 3,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            }
            ,
             {
                itemName: "Fitted Table Cloth",
                quantity : 3,
                unitPrice: 10,
            }
              ,
             {
                itemName: "Black Table Runner",
                quantity : 3,
                unitPrice: 3,
            } ,
             {
                itemName: "Kids Chairs",
                quantity : 5,
                unitPrice: 3,
            }
            ,
             {
                itemName: "Metal Folding Chairs",
                quantity : 10,
                unitPrice: 1.5,
            }
            ],
        charges:{
            deliveryFee: 60,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-19",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-11",
        itemsBackDate: "2026-07-12",
        itemsOutAt: "10:30 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
 {
        id: "#BK-065",
        customerName: "Jigna",
        eventDate: "2026-07-04",
        items: [
            {
                itemName: "Tables",
                quantity : 8,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 60,
                unitPrice: 2,
            }
            ,
             {
                itemName: "Regular Table Cloth",
                quantity : 8,
                unitPrice: 5,
            }
              ,
            
            ],
        charges:{
            deliveryFee: 60,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-22",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-04",
        itemsBackDate: "2026-07-05",
        itemsOutAt: "10:30 AM",
        itemsBackAt: "9:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-066",
        customerName: "Hadia",
        eventDate: "2026-07-04",
        items: [
            {
                itemName: "Tables",
                quantity : 1,
                unitPrice: 10,
            },
             {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            }
            ,
             {
                itemName: "Cocktail Table with Cover",
                quantity : 1,
                unitPrice: 20,
            },
            {
                itemName: "Kids Chairs",
                quantity : 12,
                unitPrice: 3,
            },
            
            ],
        charges:{
            deliveryFee: 50,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-23",
        fulfillmentType: "business_pickup",
        itemsOutDate: "2026-07-04",
        itemsBackDate: "2026-07-05",
        itemsOutAt: "1:30 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-067",
        customerName: "Preety Rana",
        eventDate: "2026-07-01",
        items: [
            {
                itemName: "Blue Table Runners",
                quantity : 5,
                unitPrice: 3,
            },],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-28",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-01",
        itemsBackDate: "2026-07-02",
        itemsOutAt: "10:30 PM",
        itemsBackAt: "10:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-068",
        customerName: "Nazeeha",
        eventDate: "2026-07-09",
        items: [
            {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            },],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-27",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-10",
        itemsBackDate: "2026-07-11",
        itemsOutAt: "2:30 PM",
        itemsBackAt: "8:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-069",
        customerName: "Kristal Khan",
        eventDate: "2026-07-11",
        items: [
            {
                itemName: "Chairs",
                quantity : 20,
                unitPrice: 2,
            },
            {
                itemName: "Regular Table Cloth",
                quantity : 3,
                unitPrice: 5,
            },
        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-28",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-10",
        itemsBackDate: "2026-07-11",
        itemsOutAt: "7:30 PM",
        itemsBackAt: "10:00 PM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-070",
        customerName: "Obaid",
        eventDate: "2026-07-10",
        items: [
            {
                itemName: "Chairs",
                quantity : 25,
                unitPrice: 2,
            },
            {
                itemName: "Fitted Table Cloth",
                quantity : 5,
                unitPrice: 10,
            },
             {
                itemName: "Tables",
                quantity : 5,
                unitPrice: 10,
            },
        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-28",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-10",
        itemsBackDate: "2026-07-12",
        itemsOutAt: "4:30 PM",
        itemsBackAt: "10:00 AM",
         bookingStatus: "confirmed"

    },
    {
        id: "#BK-071",
        customerName: "Monique",
        eventDate: "2026-07-11",
        items: [
            {
                itemName: "Kids Chairs",
                quantity : 6,
                unitPrice: 3,
            },
            {
                itemName: "Kids Table",
                quantity : 1,
                unitPrice: 10,
            },
            {
                itemName: "Table",
                quantity : 1,
                unitPrice: 10,
            },
        ],
        charges:{
            deliveryFee: 0,
            setupFee:0,
            discount:0,
            tax: 0
        },
        createdAt: "2026-06-28",
        fulfillmentType: "customer_pickup",
        itemsOutDate: "2026-07-03",
        itemsBackDate: "2026-07-04",
        itemsOutAt: "7:30 PM",
        itemsBackAt: "8:00 PM",
         bookingStatus: "confirmed"

    },
    
]