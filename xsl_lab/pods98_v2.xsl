<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head/>
            <body>
                <h1><xsl:value-of select="proceedings/name"/></h1>
                <xsl:for-each select="proceedings/contents/article">
                    <p>
                        "<xsl:value-of select="title"/>"
                    </p>
                </xsl:for-each>
            </body>

        </html>
    </xsl:template>

</xsl:stylesheet>

<!--ALTERNATIVE VERSION
<xsl:template match="/">
    <html>
    <head />
    <body>
      <h1><xsl:value-of select="proceedings/name"/></h1>
      <xsl:apply-templates select="proceedings/contents/article/title"/>
    </body>
    </html>
  </xsl:template>

  <xsl:template match="title">
    <p>
      "<xsl:value-of select="."/>"
    </p>
  </xsl:template>

</xsl:stylesheet>-->