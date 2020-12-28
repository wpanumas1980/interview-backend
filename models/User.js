module.exports = (sequelize, DataTypes) => {
    const table = sequelize.define("User", {
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        qrUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        }
    }, {
        tableName: "users",
        timestamps: false,
    });

   
    return table;
}