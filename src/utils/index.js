export const getImage = (name) => {
    switch (name.toLowerCase()) {
        case 'vegetarian':
            return 'vegetarian.jfif';
        case 'blt':
            return 'blt.jfif';
        case 'turkey':
            return 'turkey.jfif';
    }
}
