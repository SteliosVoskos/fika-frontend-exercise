import findGenres from '../../utils';

describe('A utility function for finding genres based on ids', () => {
    it('should return an array of genres', () => {
        expect(findGenres([{id: 0, name: 'A'}, {id: 1, name: 'B'}], { genre_ids: [1] })).toStrictEqual(['B'])
    });
    
});
