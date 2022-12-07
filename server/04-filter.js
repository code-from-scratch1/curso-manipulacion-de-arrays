const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const search = (string) => {
    return orders.filter(obj => {
        return obj.customerName.includes(string)
    })
  }

  console.log(search('Nico'))
  console.log(orders)

  