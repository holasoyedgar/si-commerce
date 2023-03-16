import dayjs from "dayjs";

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export const dateFormatter = (date) => {
    return dayjs(date).locale("es").format("DD / MMMM / YYYY hh:mm a")
}

export const calculateTotalQuantity = (items) => {
    return items.reduce((previousValue, item) => previousValue + item.quantity, 0);
}

export const calculateTotalOrder = (items) => {
    return items.reduce((previousValue, item) => previousValue + item.total, 0);
}

export const getOrderStatus = (status) => {
    const statusList = {
        "generated": "Generada",
        "confirmed": "Confirmada",
        "sent": "Enviada",
        "received": "Recibida",
        "cancelled": "Cancelada"
    }

    return statusList[status];
}