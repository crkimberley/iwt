<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="booker">
        <html>
            <body>
                <xsl:for-each select="award/title">
                    <p>
                        "<xsl:value-of select="."/>"
                    </p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>