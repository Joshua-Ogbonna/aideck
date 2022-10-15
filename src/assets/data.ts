export const data = [
    {
        dp: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Missions for Zimbabwe",
        datePosted: Date(),
        target: 82000,
        amountRaised: 50000,
    },
    {
        dp: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Missions for Zimbabwe",
        datePosted: Date(),
        target: 100000,
        amountRaised: 78000,
    },
];

export const donations = [{ name: "John Doe", amount: 3000, date: Date() }];

export const allCampaigns = [
    {
        id: 1,
        title: "Mission Funds",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        target: 1200,
        amountRaised: 0,
        images: ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
        datePosted: Date()
    }
]

export const missionaries = [
    {
        id: 1,
        name: "Chukky John",
        email: "chukkyjohn@gmail.com",
        password: "",
        phone: "08146771436",
        address: "Aba Abia State",
        nationality: "Nigerian",
        meansOfIdentification: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        denominationalAffiliation: "Winners Chapel",
        denominationalLicense: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        bankName: "Access Bank",
        accountNo: "01029930029",
        accountName: "Chukky John",
        guarantorName: "John Chukwu",
        guarantorEmail: "johnchukwu@gmail.com",
        guarantorAddress: "Lagos State",
        guarantorNationality: "Nigerian",
        guarantorPhone: "0812938882993",
        guarantorMeansOfIdentification: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
]

export const fundings = [
    {
        "name": "John Chukky",
        "email": "johnchukwu@gmail",
        "title": "for mission",
        "discription": "to north to preach the gospel",
        "amount": 200000,
        "images": "/media/location_images/1.jpg"
    }
]

export const user = JSON.parse(sessionStorage.getItem("user") || "{}")