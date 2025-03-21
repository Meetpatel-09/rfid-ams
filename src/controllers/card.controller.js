const CardModel = require("../models/card.model");

exports.createCard = async (req, res) => {
    try {
        await CardModel.deleteMany();
        const card = new CardModel(req.body);

        await card.save();

        res.status(201).json({
            msg: "Card Created Successfully",
            data: card,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.getCard = async (req, res) => {
    try {
        const cards = await CardModel.findOne();

        res.status(200).json({
            msg: "Cards Found Successfully",
            data: cards,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};
