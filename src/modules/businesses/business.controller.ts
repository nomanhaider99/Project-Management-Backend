import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BusinessService } from './business.service';

@Controller('api/v1/businesses')
export class BusinessController {
    constructor(private businessService: BusinessService) { }
    @Post('create-business')
    @HttpCode(200)
    async registerBusiness(@Body() body, @Res() response: Response) {
        const { name, email, password } = body;
        const business = await this.businessService.createBusiness(name, email, password)
        response.json(business);
    }

    @Get('get-businesses')
    async getAllBusinesss(@Res() response: Response) {
        const business = await this.businessService.getBusiness();
        response.json(business);
    }

    @Get('get-business/:id')
    async getBusiness(@Res() response: Response, @Param() params) {
        const { id } = params;
        const business = await this.businessService.getBusinessById(id)

        response.json(business);
    }

    @Get('get-loggedin-business')
    async getLoggedInBusiness(@Res() response: Response, @Req() request: Request) {
        const business = await this.businessService.getLoggedInBusiness(request);

        response.json(business);
    }

    @Get('isloggedin-business')
    async isBusinessLoggedIn(@Res() response: Response, @Req() request: Request) {
        const business = await this.businessService.isBusinessLoggedIn(request);

        response.json(business);
    }

    @Patch('update-business/:id')
    async updateBusinessById(@Body() body, @Param() params, @Res() response: Response) {
        const { id } = params;
        const { tagline, description, logo, address, industry } = body;
        const business = await this.businessService.updateBusiness(id, tagline, description, logo, industry, address);
        response.json(business);
    }

    @Delete('delete-business/:id')
    async deleteBusinessById(@Param() params, @Res() response: Response) {
        const { id } = params;
        const business = await this.businessService.deleteBusiness(id);
        response.json(business);
    }

    @Post('login-business')
    @HttpCode(200)
    async loginBusiness(@Body() body, @Res() response: Response) {
        const { email, password } = body;
        const business = await this.businessService.loginBusiness(email, password, response)
        response.json(business);
    }

    @Get('logout-business')
    async logoutBusiness(@Res() response: Response, @Req() request: Request) {
        const business = await this.businessService.logoutBusiness(request, response);

        response.json(business);
    }
}
