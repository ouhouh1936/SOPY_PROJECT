import Book from "../../../model/Book";
import Author from "../../../model/Author";

export default {
  Query: {
    getAllAuthor: async (_, agrs) => {
      try {
        const result = await Author.find({}, {}).populate({
          path: `artList`,
          model: Book,
        });
        return result;
      } catch (e) {
        console.log(e);

        return [];
      }
    },

    getOneAuthor: async (_, agrs) => {
      const { name } = args;

      try {
        const result = await Author.findOne({ name }, {}).populate({
          path: `artList`,
          model: Book,
        });
        return result;
      } catch (e) {
        console.log(e);

        return {};
      }
    },
  },
};
