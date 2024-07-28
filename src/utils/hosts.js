export const hosts = [
    {name: 'Helen', icon: 'https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg'}
]
export const defaultIcon = 'https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg'

export const findHostIcon = (name) => {
    const result = hosts.filter(host => host.name === name)
    if(result.length){
        return result[0].icon
    }else{
        return defaultIcon
    }

}