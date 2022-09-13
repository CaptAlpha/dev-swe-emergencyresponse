const validator = require('validator')
module.exports = (sequelize, DataTypes)=>{
    const user = sequelize.define('user',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                checkName(value){
                    if(!(validator.isAlpha(value))){
                        throw new Error("Invalid Name!")
                    }
                }
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                checkEmail(value){
                    if(!(validator.isEmail(value))){
                        throw new Error("Invalid Email!")
                    }
                }
            }   
        },
        contactNumber:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                checkPhoneNum(value){
                    if(!validator.isMobilePhone(value)){
                        throw new Error("Invalid Phone Number!")
                    }
                }
            }
        },
        address:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        dateOfBirth:{
            type: DataTypes.DATE,
            allowNull: false
        },
        bloodGroup:{
            type: DataTypes.ENUM("A+","B+","O+","AB+","A-","B-","O-","AB-"),
            allowNull: false
        }
    })
    return user
}
