const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ jokes: allDaJokes }))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({_id: req.params.id})
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ user: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.UpdateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}