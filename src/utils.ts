export const getMonthName = (monthNumber: number) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    if (monthNumber < 1 || monthNumber > 12) throw new Error('Number does not match to any month');
    return months[monthNumber - 1];
};

export const formatCurrency = (number: number) => {
    return Intl.NumberFormat('es-MX', {
        currency: 'MXN',
        style: 'currency'
    }).format(number);
};
