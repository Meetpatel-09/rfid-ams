const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
    {
        cardId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CardModel = mongoose.model("Card", cardSchema);

module.exports = CardModel;
