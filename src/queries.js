const findUsers = "SELECT * FROM tb_users AS u JOIN tb_user_tracking AS ut ON u.id = ut.user_id WHERE (6371 * acos(cos(radians(21.170240)) * cos(radians(ut.lat)) * cos(radians(ut.lng) - radians(72.831062)) + sin(radians(21.170240)) * sin(radians(ut.lat )))) < $1";
const getUsers = "SELECT * FROM tb_users ORDER BY id LIMIT $1 OFFSET $2";
const getTotalUser = "SELECT count(*) as count FROM tb_users";

module.exports = {
    findUsers,
    getUsers,
    getTotalUser,
}