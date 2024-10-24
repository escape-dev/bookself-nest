import { BadRequestException, HttpStatus, ValidationPipe } from "@nestjs/common"
import { ValidationError } from "class-validator"

export const validationsPipe = () => {
  return new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {
      const formattedErrors = errors.map((error) => {
        return {
          field: error.property,
          errors: Object.values(error.constraints || {}),
        };
      });

      return new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Invalid request",
        errors: formattedErrors
      })
    }
  })
}