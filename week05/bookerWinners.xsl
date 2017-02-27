<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="booker">
            <html>
                <body>
                    <h1>Winners of the Booker Prize</h1>
                    <table>
                        <th>Author</th>
                        <th>Book Title</th>
                        <th>Year</th>
                        <tr><td><br/></td></tr>
                        <xsl:for-each select="award">
                            <xsl:sort select="year" data-type="number" order="descending"/>
                            <tr>
                                <td><xsl:value-of select="author"/></td>
                                <td><xsl:value-of select="title"/></td>
                                <td><xsl:value-of select="year"/></td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </body>
            </html>
    </xsl:template>

</xsl:stylesheet>