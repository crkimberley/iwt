<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head/>
            <body>
                <h1><xsl:value-of select="proceedings/name"/></h1>
                <xsl:for-each select="proceedings/contents/article">
                    <p>
                        <xsl:for-each select="author">
                            <xsl:value-of select="."/>,
                        </xsl:for-each>
                        <br/>
                        "<em><xsl:value-of select="title"/></em>", pp.
                        <xsl:value-of select="pages"/>.
                    </p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>