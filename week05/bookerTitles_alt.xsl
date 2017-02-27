<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="booker">
        <html>
            <body>
                <xsl:apply-templates select="award/title"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="title">
        <p>
            "<xsl:value-of select ="."/>"
        </p>
    </xsl:template>

</xsl:stylesheet>