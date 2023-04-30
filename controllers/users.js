import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//AsyncHandler version
const getAllUsers = asyncHandler(async (req, res, next) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})


const getUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.find({userId: id });
    res.send(user);
})


const createUser = asyncHandler(async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    const location = req.body.location;
    const instruments = req.body.instruments;
    const genres = req.body.genres;
    const availability = req.body.availability;
    const experience = req.body.experience;

    const user = await new User( {
        email: email, 
        password: password, 
        location: location,
        instruments: instruments, 
        genres: genres, 
        availability: availability, 
        experience: experience 
    })
    user.userId = user._id.toString();
    user.save();

    res.send(user);
})


/* TODO: Incomplete - need to finish */
const updateUserById = asyncHandler(async (req, res, next) => {

    const userId = req.body.userId;
    const email = req.body.email;
    const password = req.body.password;
    const location = req.body.location;
    const instruments = req.body.instruments;
    const genres = req.body.genres;
    const availability = req.body.availability;
    const experience = req.body.experience;

    const user = await User.find({userId: userId})
    user = await User.updateOne()

    res.send(`NOT IMPLEMENTED: Update User ${req.params.id}`)
})


const deleteUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.deleteOne({ userId: id });
    res.send(user);
})

// Mostly for wiping db of test users for now
const deleteAllUsers = asyncHandler(async (req, res, next) => {
    // const id = req.params.id;
    const user = await User.deleteMany();
    res.send(user);
})


//Conventional versions

// const getAllUsers = async(req, res) => {
//     try{
//         const users = await User.find();
//         res.sendStatus(200).json(users);

//     } catch (err)  {
//         res.status(404);
//     }
// }


// const getUser = async(req, res) => {
//     try{
//         const users = await User.find({ userId: req.parmas.id});
//         res.sendStatus(200).json(users);

//     } catch (err)  {
//         res.status(404);
//     }
// }


// const createUser = async(req, res) => {
//     try{
//         const users = await User.find();
//         res.sendStatus(200).json(users);

//     } catch (err)  {
//         res.status(404);
//     }
// }


// const updateUserById = async(req, res) => {
//     try{
//         const users = await User.find();
//         res.sendStatus(200).json(users);

//     } catch (err)  {
//         res.status(404);
//     }
// }


// const deleteUser = async(req, res) => {
//     try{
//         const id = req.params.id;
//         const user = await User.deleteOne({ userId: id});
//         res.sendStatus(200).json(user);

//     } catch (err)  {
//         res.status(404);
//     }
// }


export default getAllUsers 
export {getAllUsers, getUser, createUser, updateUserById, deleteUser, deleteAllUsers}
