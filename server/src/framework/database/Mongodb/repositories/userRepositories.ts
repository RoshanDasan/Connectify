import User from "../models/userModel";

export const userRepositoryMongoDB = () => {
  const addUser = async (user: {
    name: string;
    userName: string;
    email: string;
    number?: number;
    password?: string;
  }) => {

    const newUser = new User(user);

    return await newUser.save();
  };

  const getAllUsers = async () => {
    const users: any = await User.find({ _id: { $ne: '646fa8515333e77cdec159c2' }, followers: { $nin: ['6471800e2ed680381cbae276', '6477705ef858f715f868093a'] } });

    return users;
  }

  const getUserByEmail = async (email: string) => {
    const user: any = await User.findOne({ email });
    return user
  };
  const getUserByUserName = async (userName: string) => {

    const user: any = await User.findOne({ userName })
    return user;
  };
  const getUserById = async (id: string) => {
    try {

      const user: any = await User.findOne({ _id: id })
      return user;

    } catch (error) {
      throw error
    }
  };
  const getFollowers = async (_id: string) => {
    const user: any = await User.findOne({ _id });
    const followers: any[] = await Promise.all(
      user.followers.map(async (follower: any) => {
        return await User.findOne({ _id: follower });
      })
    );
    return followers;
  };

  const getFollowings = async (_id: string) => {
    const user: any = await User.findOne({ _id });
    const followings: any[] = await Promise.all(
      user.following.map(async (following: any) => {
        return await User.findOne({ _id: following });
      })
    );

    return followings;
  };

  const findFriend = async (_id: string, friendId: any) => {
    const user: any = await User.findOne({ _id })


    const isUserExist: any = await user.followers.find((user: any) => user === friendId)

    return isUserExist;
  }

  const unfollowFriend = async (_id: string, friendId: string) => {
    // remove friend from user follower list
    await User.findByIdAndUpdate({ _id },
      { $pull: { followers: friendId } });
    await User.findByIdAndUpdate({ _id: friendId },
      { $pull: { following: _id } })
    const friendDetails: any = await User.findOne({ _id: friendId });

    return friendDetails
  }

  const followFriend = async (_id: string, friendId: string) => {
    // add friend to user follower list
    await User.findByIdAndUpdate({ _id },
      { $push: { followers: friendId } });
    await User.findByIdAndUpdate({ _id: friendId },
      { $push: { following: _id } })
    const friendDetails: any = await User.findOne({ _id: friendId });

    return friendDetails
  }

  const searchUser = async (prefix: any) => {

    const regex = new RegExp(`^${prefix}`, 'i');
    const users = await User.find({ userName: regex });

    return users
  }

  const updateProfile = async (_id: string, data: {
    image: string,
    bio: string,
    gender: string
  }) => {
    const { image, bio, gender } = data;

    const updateResult = await User.findByIdAndUpdate(_id, {
      $set: {
        dp: image,
        bio,
        gender
      }
    }, { new: true });

    return updateResult;
  };

  const blockUser = async (_id: string) => {
    await User.findByIdAndUpdate({ _id }, {
      $set: { isBlock: true }
    })
    return 'Blocked'
  }
  const unBlockUser = async (_id: string) => {
    await User.findByIdAndUpdate({ _id }, {
      $set: { isBlock: false }
    })
    return 'UnBlocked'
  }

  return {
    addUser,
    getUserByEmail,
    getUserByUserName,
    getUserById,
    getFollowers,
    getFollowings,
    findFriend,
    unfollowFriend,
    followFriend,
    getAllUsers,
    searchUser,
    updateProfile,
    blockUser,
    unBlockUser
  };
}

export type userRepositoryMongoDB = typeof userRepositoryMongoDB;