const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'generateqr',

    data: new SlashCommandBuilder()
            .setName('generateqr')
            .setDescription('Generates a QR code')
            .addStringOption((option) => option.setName('url').setDescription('URL of the QR code').setRequired(true))
            .addStringOption((option) => option.setName('color').setDescription('Color for the QR code').setRequired(false))
            .addStringOption((option) => option.setName('background-color').setDescription('Backgroud color for the QR code').setRequired(false))
            .addNumberOption((option) => option.setName('margin').setDescription('Margin in pixels').setRequired(false).setMinValue(0).setMaxValue(50))
            .addNumberOption((option) => option.setName('size').setDescription('Size in pixels').setRequired(false).setMinValue(10).setMaxValue(1000)),

    async execute(client, interaction)
    {
        let url = interaction.options.getString('url');
        const color = interaction.options.getString('color');
        const bgColor = interaction.options.getString('background-color');
        const margin = interaction.options.getNumber('margin');
        const size = interaction.options.getNumber('size');
        url = url.replace(' ', '%20');

        interaction.reply(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=100x100&color=${color}&bgcolor=${bgColor}&margin=${margin}&size=${size}x${size}&format=png`);
    }
}