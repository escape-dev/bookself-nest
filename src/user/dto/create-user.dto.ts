import { IsAlphanumeric, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast two characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have atleast three characters.' })
  @IsAlphanumeric('en-US', {
    message: 'Username does not allow other than alpha numeric chars.',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDateString()
  birthday: string;

  @IsString()
  @IsEnum([ 'male', 'female' ])
  gender: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain minimum 8 and maximum 20 characters,
    at least one uppercase letter,
    one lowercase letter,
    one number and 
    one special character`,
  })
  password: string;
}
